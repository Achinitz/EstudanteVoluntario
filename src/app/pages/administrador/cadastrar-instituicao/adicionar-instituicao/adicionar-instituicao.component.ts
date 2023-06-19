import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConsultaCepService } from 'src/app/services/consulta-cep.service';
import { EnderecoService } from 'src/app/services/endereco.service';
import { InstituicaoService } from 'src/app/services/instituicao.service';
import { genericAnimations } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-adicionar-instituicao',
  templateUrl: './adicionar-instituicao.component.html',
  styleUrls: ['./adicionar-instituicao.component.scss'],
  animations: genericAnimations,
})
export class AdicionarInstituicaoComponent implements OnInit {
  loginInvalido: boolean = false;
  submitted = false;
  estado: any;
  estadoNome: any;
  cidade: any;
  cidadeNome: any;
  bairro: any;
  resultadoCep: any;
  cidades: any = [];
  bairros: any = [];
  estados: any = [];

  public formCadastro = new FormGroup({
    cnpj: new FormControl(null, [Validators.required]),
    nome: new FormControl(null, Validators.required),
    sigla: new FormControl(null, Validators.required),
    telefone: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    endereco: new FormGroup({
      cep: new FormControl(null, Validators.required),
      logradouro: new FormControl(null, Validators.required),
      numero: new FormControl(null, Validators.required),
      bairro: new FormControl(null, Validators.required),
      complemento: new FormControl(null),
      estado: new FormControl(null, Validators.required),
      cidade: new FormControl(null, Validators.required),
    }),
  });

  constructor(
    private enderecoService: EnderecoService,
    private consultaCepService: ConsultaCepService,
    private toast: ToastrService,
    private instituicaoService: InstituicaoService,
    private router: Router
  ) {
    this.inicializaFormulario();
  }

  ngOnInit(): void {}

  inicializaFormulario() {
    this.enderecoService.getEstados().subscribe((data: any) => {
      this.estados = data;
    });
  }

  cadastrarInstituicao() {
    this.submitted = true; 
    if (this.formCadastro.valid) {
      this.formCadastro.get('endereco.estado')?.setValue(this.estadoNome);
      this.formCadastro.get('endereco.cidade')?.setValue(this.cidadeNome);
      this.instituicaoService
        .cadastrarInstituicao(this.formCadastro.value)
        .subscribe({
          next: (res: any) => {
            this.toast.success(res.message);
            this.router.navigate(['/Administrador/cadastrar-instituicao']);
          },
          error: (err: any) => {               
            this.toast.error(err.error.message);
          },
        });
    } else {
      this.toast.error(
        'Não foi possível prosseguir, verifique os campos do formulário!'
      );
    }
  }

  onAddCidade() {
    this.enderecoService
      .getCidades(this.formCadastro.get('endereco.estado')?.value)
      .subscribe((data: any) => {
        this.cidades = data;
      });
  }

  validaCep() {
    if (this.formCadastro.get('endereco.cep')?.value.length === 8) {
      let cep = this.formCadastro.get('endereco.cep')?.value;
      this.consultaCepService.getDataCep(cep.replace('-', '')).subscribe(
        (data: any) => {
          if (data.erro === true) {
            this.toast.error('CEP Inválido!');
          }
          this.resultadoCep = data;
          this.estados.forEach((element: any) => {     
            if (element.sigla === data.uf) {
              this.formCadastro.get('endereco.estado')?.setValue(element.id);
              this.estadoNome = element.nome;
            }
          });

          setTimeout(() => {
            this.cidades.forEach((element: any) => {
              if (element.nome === data.localidade) {
                this.formCadastro.get('endereco.cidade')?.setValue(element.id);
                this.formCadastro
                  .get('endereco.logradouro')
                  ?.setValue(data.logradouro);
                this.formCadastro.get('endereco.bairro')?.setValue(data.bairro);
                this.cidadeNome = element.nome;                
              }
            });
          }, 1500);
         
        },
        (error) => {
          console.log('Ocorreu um erro');
        }
      );
    }
  }
 
}

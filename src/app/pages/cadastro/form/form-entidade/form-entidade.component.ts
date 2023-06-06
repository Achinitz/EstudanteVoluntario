import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnderecoService } from 'src/app/services/endereco.service';
import { ConsultaCepService } from 'src/app/services/consulta-cep.service';
import { genericAnimations } from 'src/app/shared/animations/animations';
import { ToastrService } from 'ngx-toastr';
import { EntidadeService } from 'src/app/services/entidade.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-form-entidade',
  templateUrl: './form-entidade.component.html',
  styleUrls: ['./form-entidade.component.scss'],
  animations: genericAnimations,
})
export class FormEntidadeComponent implements OnInit {
  loginInvalido: boolean = false;
  submitted = false;
  estado: any;
  cidade: any;
  bairro: any;
  resultadoCep: any;
  cidades: any = [];
  bairros: any = [];
  estados: any = [];

  public formCadastro = new FormGroup({
    login: new FormControl(null, [
      Validators.required,
    ]),
    razaoSocial: new FormControl(null, Validators.required),
    nome: new FormControl(null, Validators.required),
    nomeFantasia: new FormControl(null, Validators.required),
    nomeResponsavelCadastro: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    telefone: new FormControl(null, Validators.required),
    perfil: new FormControl('ENTIDADE'),
    endereco: new FormGroup({
      cep: new FormControl(null, Validators.required),
      logradouro: new FormControl(null, Validators.required),
      numero: new FormControl(null, Validators.required),
      bairro: new FormControl(null, Validators.required),
      complemento: new FormControl(null, Validators.required),
      estado: new FormControl(null, Validators.required),
      cidade: new FormControl(null, Validators.required),
    }),
    senha: new FormControl(null, Validators.required),
    confirmarSenha: new FormControl(null, Validators.required),
    termo: new FormControl(null, Validators.required),
  });

  mostrarValores() {
    console.log('Formulário enviado');
  }

  constructor(
    private consultaCepService: ConsultaCepService,
    private enderecoService: EnderecoService,
    private toast: ToastrService,
    private entidadeService: EntidadeService,
    private router: Router,
    private loginService: LoginService,
  ) {
    this.inicializaFormulario();
  }

  verificaCnpjExistente(){

    console.log(this.formCadastro.get('login')?.value.length)

    if (this.formCadastro.get('login')?.value.length === 14) {
      this.loginService.verificarLogin(this.formCadastro.get('login').value).subscribe({
        next: (res:any) => {
          console.log('********* BEGIN ok');
          console.log(res);
          console.log('********* END ok');
        },
        error: (err:any) => {
          console.log('********* BEGIN error');
          console.log(err);
          console.log('********* END error');
        }
      });
    }
  }

  inicializaFormulario() {
    this.enderecoService.getEstados().subscribe((data: any) => {
      this.estados = data;
      //console.log('Inicio estados');
      //console.log(data);
      //console.log('Fim estados');
    });
  }

  onAddCidade() {
    // if(this.formCadastro.get("estado")?.value === null && ){
    //   this.formCadastro.get('cidade')?.setValue(null)
    // }
    this.enderecoService
      .getCidades(this.formCadastro.get('endereco.estado')?.value)
      .subscribe((data: any) => {
        this.cidades = data;
      });
  }

  onAddBairro() {
    console.log('Inicio cidade selecionado');
    console.log(this.formCadastro.get('endereco.cidade')?.value);
    console.log('Fim cidade selecionado');
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
            }
          });

          setTimeout(() => {
            this.cidades.forEach((element: any) => {
              if (element.nome === data.localidade) {
                this.formCadastro.get('cidade')?.setValue(element.id);
                this.formCadastro.get('logradouro')?.setValue(data.logradouro);
                this.formCadastro.get('bairro')?.setValue(data.bairro);
              }
            });
          }, 1500);
        },
        (error) => {
          console.log('Ocorreu um erro');
        }
      );
      console.log('saiu na api');
    }
  }

  validarSenha() {
    if (
      this.formCadastro.get('senha')?.value ==
        this.formCadastro.get('confirmarSenha')?.value &&
      !this.formCadastro.get('senha')?.invalid &&
      !this.formCadastro.get('confirmarSenha')?.invalid
    ) {
      console.log('senha igual');
    } else {
      this.toast.error('As senhas não são iguais!');
    }
  }

  ngOnInit(): void {}

  cadastrarEntidade() {

    console.log(this.formCadastro.value)

    this.formCadastro.get('nome').setValue(this.formCadastro.get('nomeFantasia')?.value);

    this.submitted = true;
    if (this.formCadastro.valid) {
      this.entidadeService.cadastrarEntidade(this.formCadastro.value).subscribe({
        next: (res:any) => {
          this.toast.success(res.message);
          this.router.navigate(['/login']);
        },
        error: (erro:any) => {
          console.log(erro);
        },
      })
    }else{      
      this.toast.error('Não foi possível prosseguir, verifique os campos do formulário!');
    }
  }
}

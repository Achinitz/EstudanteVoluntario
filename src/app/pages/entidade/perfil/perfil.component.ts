import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnderecoService } from 'src/app/services/endereco.service';
import { ConsultaCepService } from 'src/app/services/consulta-cep.service';
import { genericAnimations } from 'src/app/shared/animations/animations';
import { ToastrService } from 'ngx-toastr';
import { EntidadeService } from 'src/app/services/entidade.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  animations: genericAnimations,
})
export class PerfilComponent implements OnInit {
  submitted = false;

  cnpj = '00000000000000';
  razaoSocial = 'Razão Social';
  nomeFantasia = 'Nome Fantasia';

  usuario: any;

  estado: any;
  cidade: any;
  bairro: any;
  resultadoCep: any;
  cidades: any = [];
  bairros: any = [];
  estados: any = [];

  public formCadastro = new FormGroup({
    login: new FormControl(
      { value: this.cnpj, disabled: true },
      Validators.required
    ),
    imgPerfil: new FormControl(null, Validators.required),
    missao: new FormControl(null, Validators.required),
    perfilVoluntario: new FormControl(null, Validators.required),
    razaoSocial: new FormControl(
      { value: this.razaoSocial, disabled: true },
      Validators.required
    ),
    nomeFantasia: new FormControl(
      { value: this.nomeFantasia, disabled: true },
      Validators.required
    ),
    nomeResponsavelCadastro: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    telefone: new FormControl(null, Validators.required),
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
    novaSenha: new FormControl(null),
    confirmarSenha: new FormControl(null, Validators.required),
  });

  mostrarValores() {
    console.log('Formulário enviado');
  }

  constructor(
    private consultaCepService: ConsultaCepService,
    private enderecoService: EnderecoService,
    private entidadeService: EntidadeService,
    private loginService: LoginService,
    private toast: ToastrService
  ) {
    this.inicializaFormulario(this.loginService.usuarioLogado._id);
  }

  inicializaFormulario(idUsuario: string) {
    this.enderecoService.getEstados().subscribe((data: any) => {
      this.estados = data;
    });
    this.entidadeService.getPerfilEntidade(idUsuario).subscribe({
      next: (res:any) =>{
        this.usuario = res;
        console.log(Object.assign({}, res.entidade, res.usuario));
         this.formCadastro.setValue( Object.assign({}, res.entidade, res.usuario) );
      },
      error: (err:any) => {
        this.toast.error(err?.message);
      }
    });
  }

  onAddCidade() {
    this.enderecoService
      .getCidades(this.formCadastro.get('estado')?.value)
      .subscribe((data: any) => {
        this.cidades = data;
      });
  }

  onAddBairro() {
    // console.log('Inicio cidade selecionado');
    // console.log(this.formCadastro.get('cidade')?.value);
    //console.log('Fim cidade selecionado');
  }

  validaCep() {
    if (this.formCadastro.get('cep')?.value.length === 8) {
      let cep = this.formCadastro.get('cep')?.value;
      this.consultaCepService.getDataCep(cep.replace('-', '')).subscribe(
        (data: any) => {
          if (data.erro === true) {
            this.toast.error('CEP Inválido!');
          }
          this.resultadoCep = data;
          //  console.log(data);
          this.estados.forEach((element: any) => {
            if (element.sigla === data.uf) {
              this.formCadastro.get('estado')?.setValue(element.id);
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
      console.log('CEP ok');
    }
  }

  validarSenha() {
    if (
      this.formCadastro.get('novaSenha')?.value ==
        this.formCadastro.get('confirmarSenha')?.value &&
      !this.formCadastro.get('novaSenha')?.invalid &&
      !this.formCadastro.get('confirmarSenha')?.invalid
    ) {
    } else {
      this.toast.error('As senhas não são iguais!');
    }
  }

    desativarConta(){
    
  }

  ngOnInit(): void {}
}

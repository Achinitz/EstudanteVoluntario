import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnderecoService } from 'src/app/services/endereco.service';
import { ConsultaCepService } from 'src/app/services/consulta-cep.service';
import { genericAnimations } from 'src/app/shared/animations/animations';
import { ToastrService } from 'ngx-toastr';
import { EntidadeService } from 'src/app/services/entidade.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
  imgPadrao = '../../../../assets/imagens/cadastroImagem.jpg';
  imagem: string = '';
  novaSenha: string = '';
  confirmarSenha: string = '';
  usuario: any;

  estado: any;
  cidade: any;
  bairro: any;
  resultadoCep: any;
  cidades: any = [];
  bairros: any = [];
  estados: any = [];

  public formCadastro = new FormGroup({
    imgPerfil: new FormGroup({
     file: new FormControl(null),
    }),
    login: new FormControl(
      { value: this.cnpj, disabled: true },
      Validators.required
    ),
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
  });

  constructor(
    private consultaCepService: ConsultaCepService,
    private enderecoService: EnderecoService,
    private entidadeService: EntidadeService,
    private loginService: LoginService,
    private toast: ToastrService,
    private router: Router
  ) {

    this.inicializaFormulario(this.loginService.usuarioLogado?._id);
  }

  inicializaFormulario(idUsuario: string) {
    this.enderecoService.getEstados().subscribe((data: any) => {
      this.estados = data;
    });
    this.entidadeService.getPerfilEntidade(idUsuario).subscribe({
      next: (res:any) =>{
        //Transformando 
        this.usuario = Object.assign({}, res.entidade, res.usuario);  
        //Removendo objetos do JSON
        delete this.usuario.userid;
        delete this.usuario.__v;
        delete this.usuario.nome;
        delete this.usuario.perfil;
        delete this.usuario.dataCadastro;
        delete this.usuario.statusPerfil;
        delete this.usuario.perfilAtivo;
        delete this.usuario._id;
                 
        this.formCadastro.setValue( this.usuario );
        this.imagem = this.formCadastro.get('imgPerfil.file').value != '' ? this.formCadastro.get('imgPerfil.file').value : this.imgPadrao;
        this.validaCep();
         },
      error: (err:any) => {
        this.toast.error(err?.message);
      }
    });
  }

  onAddCidade() {
    this.enderecoService
      .getCidades(this.formCadastro.get('endereco.estado')?.value)
      .subscribe((data: any) => {
        this.cidades = data;
      });
  }

  onAddBairro() {
    // console.log('Inicio cidade selecionado');
    // console.log(this.formCadastro.get('cidade')?.value);
    //console.log('Fim cidade selecionado');
  }

  async inputFileChange(event){
    if(event.target.files && event.target.files[0]){
      let file = event.target.files[0];       

      let base64 = await toBase64(file);
       this.imagem = 'data:' + file.type + ';base64,' + base64.toString().split(",")[1];
       this.imagem = this.imagem.toString();

      const reader = new FileReader();

      reader.addEventListener("load", () => {
        reader.readAsDataURL(event.target.files[0]);
      });

      this.formCadastro.get('imgPerfil.file').setValue(this.imagem);
    }
  }

  validaCep() {
    if (this.formCadastro.get('endereco.cep')?.value != null && this.formCadastro.get('endereco.cep')?.value.length === 8) {
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
                this.formCadastro.get('endereco.cidade')?.setValue(element.id);
                this.formCadastro.get('endereco.logradouro')?.setValue(data.logradouro);
                this.formCadastro.get('endereco.bairro')?.setValue(data.bairro);
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

    Swal.fire({
      title: 'Deseja realmente desativar o seu Perfil?',
      text: 'Ao confirmar, seu perfil será desativado.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Perfil desativado com Sucesso!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        }).then(
          () => {  
            console.log(this.loginService.usuarioLogado._id);
            this.loginService.desativar(this.loginService.usuarioLogado._id).subscribe({
              next: (res:any) => {
                this.toast.success(res.message);
                this.router.navigate(['/']);
                localStorage.clear();
              },
              error: (err:any) => {
                this.toast.error(err.message);
              }
            });
          }
        )
      }});
  }

  finalizarEdicao(){
     this.entidadeService.setPerfilEntidade(this.loginService.usuarioLogado?._id.toString(), this.formCadastro.value).subscribe({
       next: (res:any) => {
         this.toast.success(res.message);
         this.router.navigate(['/Entidade']);
       },
       error: (err:any) => {
        this.toast.error(err.message);
       }
     });
  }

  ngOnInit(): void {}
}

const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = reject;
});

const toByteArray = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);
  reader.onload = () => resolve(new Uint8Array(reader.result as ArrayBuffer));
  reader.onerror = error => reject(error);
});
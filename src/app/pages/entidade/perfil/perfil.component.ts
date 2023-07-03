import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { genericAnimations } from 'src/app/shared/animations/animations';
import { ToastrService } from 'ngx-toastr';
import { EntidadeService } from 'src/app/services/entidade.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from 'src/app/models/usuario.model';
import { Entidade } from 'src/app/models/entidade';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  animations: genericAnimations,
})
export class PerfilComponent implements OnInit {
  usuarioLogado: Usuario;
  usuario: Usuario;
  entidade: Entidade;
  submitted = false;
  senhaValida = false;
  imagem = '';

  public formCadastro = new FormGroup({
    imgPerfil: new FormGroup({
      file: new FormControl(null),
    }),
    login: new FormControl({ value: null, disabled: true }),
    missao: new FormControl(null),
    perfilVoluntario: new FormControl(null),
    razaoSocial: new FormControl({ value: null, disabled: true }),
    nomeFantasia: new FormControl({ value: null, disabled: true }),
    nomeResponsavelCadastro: new FormControl(null),
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
    senha: new FormControl(null),
    novaSenha: new FormControl(null),
    confirmarSenha: new FormControl(null),
  });

  constructor(
    private entidadeService: EntidadeService,
    private loginService: LoginService,
    private toast: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuarioLogado = this.loginService.usuarioLogado;
    this.getPerfilEntidade();
  }

  getPerfilEntidade() {
    this.entidadeService.getPerfilEntidade(this.usuarioLogado._id).subscribe({
      next: (res: any) => {
        this.entidade = res.entidade;
        this.usuario = res.usuario;
        this.formCadastro.patchValue(this.usuario);
        this.formCadastro.patchValue(this.entidade);      
        this.imagem = this.formCadastro.get('imgPerfil.file').value;
      },
      error: (err: any) => {
        this.toast.error(err?.message);
      },
    });
  }

  async inputFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];

      let base64 = await toBase64(file);
      this.imagem =
        'data:' + file.type + ';base64,' + base64.toString().split(',')[1];
      this.imagem = this.imagem.toString();

      const reader = new FileReader();

      reader.addEventListener('load', () => {
        reader.readAsDataURL(event.target.files[0]);
      });

      this.formCadastro.get('imgPerfil.file').setValue(this.imagem);
    }
  }

  validarSenha() {
    if (
      this.formCadastro.get('novaSenha')?.value ==
        this.formCadastro.get('confirmarSenha')?.value &&
      !this.formCadastro.get('novaSenha')?.invalid &&
      !this.formCadastro.get('confirmarSenha')?.invalid
    ) {
      this.senhaValida = true;
    } else {
      this.toast.error('As senhas não são iguais!');
    }
  }

  setSenha() {
    this.formCadastro
      .get('senha')
      .setValue(this.formCadastro.get('novaSenha')?.value);
  }

  desativarConta() {
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
        }).then(() => {
          console.log(this.loginService.usuarioLogado._id);
          this.loginService
            .desativar(this.loginService.usuarioLogado._id)
            .subscribe({
              next: (res: any) => {
                this.toast.success(res.message);
                this.loginService.logout();
                localStorage.clear();
                this.router.navigate(['/']);
              },
              error: (err: any) => {
                this.toast.error(err.message);
              },
            });
        });
      }
    });
  }

  editarEntidade() {
    this.submitted = true;
    this.setSenha();
    if (this.formCadastro.get('senha').value === null) {
      this.formCadastro.removeControl('senha');
    }
    this.entidadeService
      .setPerfilEntidade(this.usuarioLogado._id, this.formCadastro.value)
      .subscribe({
        next: (res: any) => {
          this.toast.success(res.message);
          this.router.navigate(['/Entidade']);
        },
        error: (err: any) => {
          this.toast.error(err.message);
        },
      });
  }
}

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

const toByteArray = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => resolve(new Uint8Array(reader.result as ArrayBuffer));
    reader.onerror = (error) => reject(error);
  });

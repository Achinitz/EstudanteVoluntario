import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { genericAnimations } from 'src/app/shared/animations/animations';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import { AdministradorService } from 'src/app/services/administrador.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Administrador } from 'src/app/models/administrador';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-meu-perfil-administrador',
  templateUrl: './meu-perfil-administrador.component.html',
  styleUrls: ['./meu-perfil-administrador.component.scss'],
  animations: genericAnimations,
})
export class MeuPerfilAdministradorComponent implements OnInit {
  usuarioLogado: Usuario;
  administrador: Administrador;
  usuario: Usuario;
  submitted = false;
  senhaValida = false;
  imagem = '';

  formCadastro: FormGroup = new FormGroup({
    login: new FormControl({ value: null, disabled: true }),
    imgPerfil: new FormGroup({
      file: new FormControl(null),
    }),
    nomeCompleto: new FormControl({ value: null, disabled: true }),
    nomeSocial: new FormControl(null),
    confirmaNomeSocial: new FormControl(false),
    identificacaoGenero: new FormControl(null),
    dataNascimento: new FormControl({ value: null, disabled: true }),
    email: new FormControl(null),
    telefone: new FormControl(null),
    senha: new FormControl(null),
    novaSenha: new FormControl(null),
    confirmarSenha: new FormControl(null),
  });

  constructor(
    private toast: ToastrService,
    private loginService: LoginService,
    private adminService: AdministradorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuarioLogado = this.loginService.usuarioLogado;
    this.getPerfilAdmin();
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

  getPerfilAdmin() {
    this.adminService.getPerfilAdmin(this.usuarioLogado._id).subscribe({
      next: (res: any) => {
        this.administrador = res.admin;
        this.usuario = res.usuario;
        this.formCadastro.patchValue(this.usuario);
        this.formCadastro.patchValue(this.administrador);
        this.imagem = this.formCadastro.get('imgPerfil.file').value;
      },
      error: (err: any) => {
        this.toast.error(err.message);
      },
    });
  }

  setPerfilAdmin() {
    this.submitted = true;
    this.setSenha();
    if (this.formCadastro.get('senha').value === null) {
      this.formCadastro.removeControl('senha');
    }
    this.adminService
      .setPerfilAdmin(this.usuarioLogado._id, this.formCadastro.value)
      .subscribe({
        next: (res: any) => {
          this.toast.success(res.message);
          this.router.navigate(['/Administrador']);
        },
        error: (err: any) => {
          this.toast.error(err.error.message);
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
}

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { genericAnimations } from 'src/app/shared/animations/animations';
import { ToastrService } from 'ngx-toastr';
import { EstudanteService } from 'src/app/services/estudante.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Estudante } from 'src/app/models/estudante';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  animations: genericAnimations,
})
export class PerfilComponent implements OnInit {
  usuarioLogado: Usuario;
  estudante: Estudante;
  usuario: Usuario;
  submitted = false;
  confirmaNomeSocial: boolean = false;
  senhaValida = false;
  imagem = '';
  cursos: any;

  public formCadastro = new FormGroup({
    imgPerfil: new FormGroup({
      file: new FormControl(null),
    }),
    login: new FormControl({ value: null, disabled: true }),
    nomeCompleto: new FormControl({ value: null, disabled: true }),
    nomeSocial: new FormControl(null),
    confirmaNomeSocial: new FormControl(false),
    identificacaoGenero: new FormControl(null),
    estadoCivil: new FormControl(null),
    dataNascimento: new FormControl({ value: null, disabled: true }),
    rg: new FormControl({ value: null, disabled: true }),
    rgEmissor: new FormControl({ value: null, disabled: true }),
    email: new FormControl(null, Validators.email),
    telefone: new FormControl(null),
    endereco: new FormGroup({
      cep: new FormControl(null),
      logradouro: new FormControl(null),
      numero: new FormControl(null),
      bairro: new FormControl(null),
      complemento: new FormControl(null),
      estado: new FormControl(null),
      cidade: new FormControl(null),
    }),
    areasInteresse: new FormControl(null),
    experiencias: new FormControl(null),
    curso: new FormGroup({
      instituicao: new FormControl({ value: null, disabled: true }),
      campus: new FormControl({ value: null, disabled: true }),
      nomeCurso: new FormControl({ value: null, disabled: true }),
      anoInicio: new FormControl({ value: null, disabled: true }),
      anoConclusao: new FormControl({ value: null, disabled: true }),
    }),
    senha: new FormControl(null),
    novaSenha: new FormControl(null),
    confirmarSenha: new FormControl(null),
  });

  constructor(
    private estudanteService: EstudanteService,
    private loginService: LoginService,
    private router: Router,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.usuarioLogado = this.loginService.usuarioLogado;
    this.getPerfilEstudante();
  }

  getPerfilEstudante() {
    this.estudanteService.getPerfilEstudante(this.usuarioLogado._id).subscribe({
      next: (res: any) => {
        this.estudante = res.estudante;
        this.usuario = res.usuario;
        this.formCadastro.patchValue(this.usuario);
        this.formCadastro.patchValue(this.estudante);
        this.imagem = this.formCadastro.get('imgPerfil.file').value;
      },
    });
  }

  setNomeSocial() {
    this.confirmaNomeSocial = this.confirmaNomeSocial ? false : true;
  }

  editarEstudante() {
    this.submitted = true;
    this.setSenha();
    if (this.formCadastro.get('senha').value === null) {
      this.formCadastro.removeControl('senha');
    }
    this.estudanteService
      .setPerfilEstudante(this.usuarioLogado._id, this.formCadastro.value)
      .subscribe({
        next: (res: any) => {
          this.toast.success(res.message);
          this.router.navigate(['/Estudante']);
        },
        error: (err: any) => {
          this.toast.error(err.message);
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

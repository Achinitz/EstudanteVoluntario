import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { genericAnimations } from 'src/app/shared/animations/animations';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import { AdministradorService } from 'src/app/services/administrador.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Administrador } from 'src/app/models/administrador';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meu-perfil-administrador',
  templateUrl: './meu-perfil-administrador.component.html',
  styleUrls: ['./meu-perfil-administrador.component.scss'],
  animations: genericAnimations,
})
export class MeuPerfilAdministradorComponent implements OnInit {
  usuarioLogado: Usuario;
  administrador: Administrador;
  submitted = false;

  formCadastro: FormGroup = new FormGroup({
    login: new FormControl({ value: null, disabled: true }),
    imgPerfil: new FormControl(null),
    nomeCompleto: new FormControl(null),
    nomeSocial: new FormControl(null),
    confirmaNomeSocial: new FormControl(false),
    identificacaoGenero: new FormControl(null),
    dataNascimento: new FormControl(null),
    email: new FormControl(null, Validators.email),
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

  getPerfilAdmin() {
    this.adminService.getPerfilAdmin(this.usuarioLogado._id).subscribe({
      next: (res: any) => {
        this.administrador = res.admin;
        this.formCadastro.patchValue(this.usuarioLogado);
        this.formCadastro.patchValue(this.administrador);      
      },
      error: (err: any) => {
        this.toast.error(err.message);
      },
    });
  }

  setPerfilAdmin() {
    this.submitted = true;
    if (this.formCadastro.valid) {
      this.adminService.setPerfilAdmin(this.usuarioLogado._id, this.formCadastro.value).subscribe({
        next: (res: any) => {
          this.toast.success(res.message);
          this.router.navigate(['/Administrador']);
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

  desativarConta() {}
}

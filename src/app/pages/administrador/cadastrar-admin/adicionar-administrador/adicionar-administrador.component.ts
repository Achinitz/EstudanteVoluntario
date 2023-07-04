import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Administrador } from 'src/app/models/administrador';
import { Usuario } from 'src/app/models/usuario.model';
import { AdministradorService } from 'src/app/services/administrador.service';

@Component({
  selector: 'app-adicionar-administrador',
  templateUrl: './adicionar-administrador.component.html',
  styleUrls: ['./adicionar-administrador.component.scss'],
})
export class AdicionarAdministradorComponent implements OnInit {
  usuarioLogado: Usuario;
  administrador: Administrador;
  submitted = false;
  senhaValida = false;

  formCadastro: FormGroup = new FormGroup({
    login: new FormControl(null, Validators.required),
    nome: new FormControl(null, Validators.required),
    perfil: new FormControl('ADMINISTRADOR'),
    imgPerfil: new FormControl(null),
    nomeCompleto: new FormControl(null, Validators.required),
    nomeSocial: new FormControl(null),
    confirmaNomeSocial: new FormControl(false),
    identificacaoGenero: new FormControl(null, Validators.required),
    dataNascimento: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    telefone: new FormControl(null, Validators.required),
    senha: new FormControl(null, Validators.required),
    confirmarSenha: new FormControl(null, Validators.required),
  });

  constructor(
    private toast: ToastrService,
    private adminService: AdministradorService,
    private router: Router
  ) {}

  ngOnInit(): void {}
    
  cadastrarAdmin() {
    this.formCadastro
      .get('nome')
      .setValue(
        this.formCadastro.get('nomeSocial')?.value != null || ''
          ? this.formCadastro.get('nomeSocial').value
          : this.formCadastro.get('nomeCompleto').value
      );
    this.submitted = true;
    if (this.formCadastro.valid) {
      this.adminService
        .cadastrarAdministrador(this.formCadastro.value)
        .subscribe({
          next: (res: any) => {
            this.toast.success(res.message);
            this.router.navigate(['/Administrador/cadastrar-admin']);
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

  isValidCPF(cpf: any) {
    if (typeof cpf !== 'string') {
      this.toast.error('CPF Inválido!');
      return false;
    }
    cpf = cpf.replace(/[\s.-]*/gim, '');
    if (
      !cpf ||
      cpf.length != 11 ||
      cpf == '00000000000' ||
      cpf == '11111111111' ||
      cpf == '22222222222' ||
      cpf == '33333333333' ||
      cpf == '44444444444' ||
      cpf == '55555555555' ||
      cpf == '66666666666' ||
      cpf == '77777777777' ||
      cpf == '88888888888' ||
      cpf == '99999999999'
    ) {
      this.toast.error('CPF Inválido!');
      return false;
    }
    let soma = 0;
    let resto;
    for (var i = 1; i <= 9; i++)
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto == 10 || resto == 11) resto = 0;
    if (resto != parseInt(cpf.substring(9, 10))) {
      this.toast.error('CPF Inválido!');
      return false;
    }
    soma = 0;
    for (let i = 1; i <= 10; i++)
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto == 10 || resto == 11) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11))) {
      this.toast.error('CPF Inválido!');
      return false;
    }
    return true;
  }

  validarSenha() {
    if (
      this.formCadastro.get('senha')?.value ==
        this.formCadastro.get('confirmarSenha')?.value &&
      !this.formCadastro.get('senha')?.invalid &&
      !this.formCadastro.get('confirmarSenha')?.invalid
    ) {
      this.senhaValida = true;
    } else {
      this.toast.error('As senhas não são iguais!');
    }
  }
}

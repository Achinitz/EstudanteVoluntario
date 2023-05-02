import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { genericAnimations } from 'src/app/shared/animations/animations';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adicionar-admin',
  templateUrl: './adicionar-admin.component.html',
  styleUrls: ['./adicionar-admin.component.scss'],
  animations: genericAnimations,
})
export class AdicionarAdminComponent implements OnInit {

  instituicoes: any = [
    {
      id: 1,
      cnpj: 92345678915,
      sigla: 'UFPR',
      nome: 'Gustavo',
      uf: 'Paraná',
      perfil: 4,
      status: 1
    },
    {
      id: 2,
      cnpj: 62345678914,
      sigla: 'UTFPR',
      nome: 'Amanda',
      uf: 'Paraná',
      perfil: 3,
      status: 1
    },
    {
      id: 3,
      cnpj: 22345678913,
      sigla: 'PUCPR',
      nome: 'Eliaquim',
      uf: 'Paraná',
      perfil: 4,
      status: 0
    },
  ];

  public formCadastro = new FormGroup({
    cpf: new FormControl(null, [
      Validators.required,
      Validators.pattern('[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}'),
    ]),
    nomeCompleto: new FormControl(null, Validators.required),
    nomeSocial: new FormControl(null),    
    email: new FormControl(null, [Validators.required, Validators.email]),   
  });

  constructor() { }

  bloquearUsuario() {
    Swal.fire({
      title: 'Deseja bloquear esse usuário?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Usuário bloqueado com sucesso!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  removerAdministradorGeral() {
    Swal.fire({
      title: 'Deseja retira a promoção deste Administrador geral?',
      text: 'Informe o motivo:',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Cargo de administrador geral removido!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  promoverAdministrador() {
    Swal.fire({
      title: 'Deseja promover este Administrador geral?',
      text: 'Ao confirmar, ele terá acesso a aba de Cadastro dos Administradores!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Administrador promovido com Sucesso!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  ngOnInit(): void {
  }

}

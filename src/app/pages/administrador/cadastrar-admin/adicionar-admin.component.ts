import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario.model';
import { AdministradorService } from 'src/app/services/administrador.service';
import { LoginService } from 'src/app/services/login.service';
import { genericAnimations } from 'src/app/shared/animations/animations';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adicionar-admin',
  templateUrl: './adicionar-admin.component.html',
  styleUrls: ['./adicionar-admin.component.scss'],
  animations: genericAnimations,
})
export class AdicionarAdminComponent implements OnInit {
  administradores: any = [];
  usuarioLogado: Usuario;
  comentario: string;

  constructor(
    private loginService: LoginService,
    private administradorService: AdministradorService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.usuarioLogado = this.loginService.usuarioLogado;
    this.getAdmins();
  }

  getAdmins() {
    this.administradorService.listarAdmins().subscribe({
      next: (res: any) => {
        this.administradores = res.admins;
      },
    });
  }

  //ARRUMAR
  async removerAdministradorGeral(idUsuarioAvaliado: string) {
    const motivo: any = await Swal.fire({
      title: 'Deseja retirar a promoção deste Administrador geral?',
      text: 'Informe o motivo:',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },
    });
    if (motivo.isConfirmed) {      
      this.comentario = motivo.value;
      console.log(this.comentario);
      this.administradorService
        .rebaixarAdministrador(idUsuarioAvaliado, this.comentario)
        .subscribe({
          next: (res: any) => {
            Swal.fire({
              title: 'success',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500,
            });
          },
          error: (erro: any) => {
            this.toast.error(erro.error.message);        
          },
        });
    }
  }
 
  promoverAdministrador(idUsuarioAvaliado: string) {
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
        this.administradorService.promoverAdministrador(idUsuarioAvaliado).subscribe({
          next: (res: any) => {
            Swal.fire({
              title: res.message,
              icon: 'success',
              showConfirmButton: false,
              timer: 1500,
            }).finally(() => window.location.reload());;
          },
          error: (erro: any) => {
            this.toast.error(erro.error.message);        
          },

        })
      
      }
    });
  }

  bloquearUsuario() {}
}

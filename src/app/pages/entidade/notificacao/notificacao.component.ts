import { Component, OnInit } from '@angular/core';
import { ModalNotificacaoComponent } from './modal-notificacao/modal-notificacao.component';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { Notificacao } from 'src/app/models/notificacao';
import { Usuario } from 'src/app/models/usuario.model';
import { LoginService } from 'src/app/services/login.service';
import { NotificacaoService } from 'src/app/services/notificacao.service';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.scss'],
})
export class NotificacaoComponent implements OnInit {
  usuarioLogado: Usuario;
  notificacoes: Notificacao[]; 
  
  constructor(
    private modalService: NgbModal,
    public dialog: MatDialog,
    private loginService: LoginService,
    private notificacaoService: NotificacaoService
  ) {}

  ngOnInit(): void {
    this.usuarioLogado = this.loginService.usuarioLogado;
    this.getNotificacoes(this.usuarioLogado._id);   
  }

  getNotificacoes(idUsuario: string) {
    this.notificacaoService.listarNotificacoes(idUsuario).subscribe({
      next: (res: any) => {
        this.notificacoes = res;        
      },
    });
  }

  visualizarNotificacao(Notificacao: Notificacao) {
    const modalRef = this.modalService.open(ModalNotificacaoComponent, {
      windowClass: 'auto',
      backdrop: 'static',
      centered: true,
    });
    modalRef.componentInstance.data = Notificacao;
  }

  excluirNotificacao(notificacao: Notificacao) {
    Swal.fire({
      title: 'Deseja realmente excluir essa notificação?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.notificacaoService.excluirNotificacao(notificacao._id).subscribe({
          next: (res: any) => {
            Swal.fire({
              title: res.message,
              icon: 'success',
              showConfirmButton: false,
              timer: 1500,
            }).finally(() => window.location.reload());
          },
          error: (erro: any) => {
            Swal.fire({
              title: erro.error.message,
              icon: 'error',
              showConfirmButton: false,
              timer: 1500,
            });
          },
        });
      }
    });
  }
  
}

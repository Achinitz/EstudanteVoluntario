import { Component, OnInit } from '@angular/core';
import { ModalNotificacaoComponent } from './modal-notificacao/modal-notificacao.component';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.scss'],
})
export class NotificacaoComponent implements OnInit {
  notificacoes: any = [
    {
      id: 1,
      nomeRemetente: 'Administração',
      dataEnvio: '28/01/2023 08:00:00',
      titulo: 'Aprovação de vaga',
      mensagem:
        'Prezado/a Entidade, informamos que a vaga "Contador de História" foi aprovada com sucesso e que o período de inscrição já está aberto.',
    },
  ];
  constructor(
    private modalService: NgbModal,
    public dialog: MatDialog,
    private router: Router,
    private data: DataService
  ) {}

  excluirNotificacao() {
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
        Swal.fire({
          title: 'Notificação excluida com sucesso!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  visualizarNotificacao(Notificacao: any) {
    // this.data.data = Vaga;
    // this.router.navigate(['/Estudante/detalhe-vaga']);
    const modalRef = this.modalService.open(ModalNotificacaoComponent, {
      windowClass: 'auto',
      backdrop: 'static',
      centered: true,
    });
    modalRef.componentInstance.data = Notificacao;
  }

  ngOnInit(): void {}
}
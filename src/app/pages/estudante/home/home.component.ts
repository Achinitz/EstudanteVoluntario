import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalVagaComponent } from '../minhas-inscricoes/modal-inscricao/modal-vaga.component';
import { EstudanteService } from 'src/app/services/estudante.service';
import { Usuario } from 'src/app/models/usuario.model';
import { StorageService } from 'src/app/services/storage.service';
import { Vaga } from 'src/app/models/vaga';
import { Inscricao } from 'src/app/models/inscricao';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  inscricoes: any = [];
  usuarioLogado: Usuario;

  constructor(
    public dialog: MatDialog,
    private modalService: NgbModal,
    public estudanteService: EstudanteService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.usuarioLogado = this.storageService.getUser();
    this.getInscricoes(this.usuarioLogado._id);
  }

  getInscricoes(value: string) {
    this.estudanteService.listarInscricoes(value).subscribe({
      next: (res: any) => {
        this.inscricoes = res.inscricoes;
      },
    });
  }

  getStatusInscricao(status: string) {
    if (status == 'ANDAMENTO') {
      return 'bg-warning';
    } else if (status == 'APROVADO') {
      return 'bg-success text-white';
    } else if (status == 'REPROVADO') {
      return 'bg-danger text-white';
    } else if (status == 'CANCELADO') {
      return 'bg-danger text-white';
    } else if (status == 'INSCRITO') {
      return 'bg-info text-white';
    } else {
      return 'bg-secondary text-white';
    }
  }

  //model para visualizar os dados
  visualizarInscricao(vaga: Vaga, statusInscricao: string) {
    const modalRef = this.modalService.open(ModalVagaComponent, {
      windowClass: 'auto',
      backdrop: 'static',
      centered: true,
    });
    modalRef.componentInstance.vagaSelecionada = vaga;
    modalRef.componentInstance.statusInscricao = statusInscricao;
  }

  //Cancelar a inscrição
  cancelarInscricao(inscricao: Inscricao) {
    Swal.fire({
      title: 'Deseja realmente cancelar a sua inscrição nessa vaga?',
      text: 'Ao confirmar, a sua inscrição nessa vaga será cancelada!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.estudanteService.cancelarInscricao(inscricao._id).subscribe({
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

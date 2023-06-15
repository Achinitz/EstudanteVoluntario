import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { ModalVagaComponent } from './modal-inscricao/modal-vaga.component';
import { ModalTermoComponent } from './modal-termo/modal-termo.component';
import { EstudanteService } from 'src/app/services/estudante.service';
import { Usuario } from 'src/app/models/usuario.model';
import { StorageService } from 'src/app/services/storage.service';
import { Vaga } from 'src/app/models/vaga';
import { Inscricao } from 'src/app/models/inscricao';

@Component({
  selector: 'app-minhas-inscricoes',
  templateUrl: './minhas-inscricoes.component.html',
  styleUrls: ['./minhas-inscricoes.component.scss'],
})
export class MinhasInscricoesComponent implements OnInit {
  inscricoes: any = [];
  usuarioLogado: Usuario;

  constructor(
    private modalService: NgbModal,
    public dialog: MatDialog,
    private estudanteService: EstudanteService,
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

  //modal para visualizar os dados
  visualizarInscricao(vaga: Vaga, statusInscricao: string) {
    const modalRef = this.modalService.open(ModalVagaComponent, {
      windowClass: 'auto',
      backdrop: 'static',
      centered: true,
    });
    modalRef.componentInstance.vagaSelecionada = vaga;
    modalRef.componentInstance.statusInscricao = statusInscricao;
  }

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

  //ARRUMAR TERMO DE ADESÃO getTermoAdesao

  aceitarTermo(vaga: Vaga) {
    //buscar dados do estudante e da entidade
    const entidade = null;
    const modalRef = this.modalService.open(ModalTermoComponent, {
      windowClass: 'auto',
      backdrop: 'static',
      scrollable: true,
      centered: true,
    });
    modalRef.componentInstance.vagaSelecionada = vaga;
    modalRef.componentInstance.estudante = this.usuarioLogado;
    modalRef.componentInstance.entidade = entidade;
  }

  rescindirTermo() {
    Swal.fire({
      title: 'Deseja realmente rescindir o seu Termo de Adesão nesta vaga?',
      text: 'Ao confirmar, o seu termo será rescindido!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Termo rescindido com sucesso!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }
}

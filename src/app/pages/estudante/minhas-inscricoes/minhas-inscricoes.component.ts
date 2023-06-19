import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { ModalVagaComponent } from './modal-inscricao/modal-vaga.component';
import { ModalTermoComponent } from './modal-termo/modal-termo.component';
import { EstudanteService } from 'src/app/services/estudante.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Vaga } from 'src/app/models/vaga';
import { Inscricao } from 'src/app/models/inscricao';
import { LoginService } from 'src/app/services/login.service';
import { TermoadesaoService } from 'src/app/services/termoadesao.service';

@Component({
  selector: 'app-minhas-inscricoes',
  templateUrl: './minhas-inscricoes.component.html',
  styleUrls: ['./minhas-inscricoes.component.scss'],
})
export class MinhasInscricoesComponent implements OnInit {
  inscricoes: any = [];
  usuarioLogado: Usuario;
  termo: any;
  estudante: any;
  entidade: any;
  vaga: any;

  constructor(
    private modalService: NgbModal,
    public dialog: MatDialog,
    private estudanteService: EstudanteService,
    private loginService: LoginService,
    private termoAdesaoService: TermoadesaoService
  ) {}

  ngOnInit(): void {
    this.usuarioLogado = this.loginService.usuarioLogado;
    this.getInscricoes(this.usuarioLogado._id);
  }

  getInscricoes(value: string) {
    this.estudanteService.listarInscricoes(value).subscribe({
      next: (res: any) => {
        this.inscricoes = res.inscricoes;
      },
    });
  }

  visualizarInscricao(vaga: Vaga, statusInscricao: string) {
    const modalRef = this.modalService.open(ModalVagaComponent, {
      windowClass: 'auto',
      backdrop: 'static',
      centered: true,
    });
    modalRef.componentInstance.vagaSelecionada = vaga;
    modalRef.componentInstance.statusInscricao = statusInscricao;
  }

  visualizarTermo(inscricao: string) {
    this.termoAdesaoService
      .getTermoAdesao(this.usuarioLogado._id, inscricao)
      .subscribe({
        next: (res: any) => {
          this.termo = res.termo;
          this.estudante = res.estudante;
          this.entidade = res.entidade;
          this.vaga = res.vaga;

          const modalRef = this.modalService.open(ModalTermoComponent, {
            windowClass: 'auto',
            backdrop: 'static',
            scrollable: true,
            centered: true,
          });
          modalRef.componentInstance.estudante = this.estudante;
          modalRef.componentInstance.termo = this.termo;
          modalRef.componentInstance.entidade = this.entidade;
          modalRef.componentInstance.vaga = this.vaga;
        },
        error: (err: any) => {
          console.log(err.error.message);
        },
      });
  }

  rescindirTermo(idTermo: string) {
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
        this.termoAdesaoService
          .rescindirTermo(this.usuarioLogado._id, idTermo)
          .subscribe({
            next: (res: any) => {
              Swal.fire({
                title:
                  'Termo rescindido com sucesso! Em breve o certificado estará disponível.',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500,
              });
              window.location.reload();
            },
          });
      }
    });
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
}

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
import { Termoadesao } from 'src/app/models/termoadesao';

@Component({
  selector: 'app-minhas-inscricoes',
  templateUrl: './minhas-inscricoes.component.html',
  styleUrls: ['./minhas-inscricoes.component.scss'],
})
export class MinhasInscricoesComponent implements OnInit {
  inscricoes: any = [];
  usuarioLogado: Usuario;
  dadosTermo: Termoadesao;

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


  aceitarTermo(inscricao: Inscricao) {

    this.termoAdesaoService.getTermoAdesao(this.usuarioLogado._id, inscricao.termoAdesaoId).subscribe({
      next: (res: any) =>{
        this.dadosTermo = res;      
      },
    })
   
    const modalRef = this.modalService.open(ModalTermoComponent, {
      windowClass: 'auto',
      backdrop: 'static',
      scrollable: true,
      centered: true,
    });

   /*  modalRef.componentInstance.vagaSelecionada = vaga;
    modalRef.componentInstance.estudante = this.usuarioLogado;
    modalRef.componentInstance.entidade = entidade;
     */
    modalRef.componentInstance.termo = this.dadosTermo;
    modalRef.componentInstance.estudante = this.dadosTermo.idEstudante;
    modalRef.componentInstance.entidade = this.dadosTermo.idEntidade;
    modalRef.componentInstance.vaga = this.dadosTermo.idVaga;
    modalRef.componentInstance.inscricao = inscricao;
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

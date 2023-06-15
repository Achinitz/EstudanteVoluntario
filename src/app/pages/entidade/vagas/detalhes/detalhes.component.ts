import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { DetalheEstudanteComponent } from './modal-estudante/detalhe-estudante.component';
import { Usuario } from 'src/app/models/usuario.model';
import { EntidadeService } from 'src/app/services/entidade.service';
import { LoginService } from 'src/app/services/login.service';
import { StatusVaga } from 'src/app/enums/status-vaga';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'],
})
export class DetalhesComponent implements OnInit {
  id: any;
  vaga: any = {};
  usuarioLogado: Usuario;
  statusVaga: StatusVaga;
  inscrito: any;

  constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private loginService: LoginService,
    private entidadeService: EntidadeService
  ) {}

  ngOnInit(): void {
    this.usuarioLogado = this.loginService.usuarioLogado;
    this.getDetalheVaga();
  }

  getDetalheVaga() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.entidadeService
      .getDetalheVaga(this.usuarioLogado._id, this.id)
      .subscribe({
        next: (res: any) => {
          this.vaga = res;
        },
      });
  }

  visualizarCandidato(userId: string, statusInscricao: string) {
    this.entidadeService
      .visualizarInscrito(this.usuarioLogado._id, this.id, userId)
      .subscribe({
        next: (res: any) => {
          this.inscrito = res;
          const modalRef = this.modalService.open(DetalheEstudanteComponent, {
            windowClass: 'auto',
            backdrop: 'static',
            centered: true,
          });
          modalRef.componentInstance.inscrito = this.inscrito;
          modalRef.componentInstance.statusInscricao = statusInscricao;
        },
      });
  }

  removerCandidato(inscrito: any) {
    Swal.fire({
      title: 'Deseja reprovar esse candidato para essa vaga?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Candidato Reprovado com sucesso!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  rescindirTermo() {
    Swal.fire({
      title: 'Deseja realmente rescindir o termo desse/a voluntário/a?',
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

  finalizarPorUrgencia() {
    Swal.fire({
      title: 'Deseja realmente finalizar esse processo seletivo?',
      text: 'O processo seletivo será fechado antes do prazo previsto, impedindo que outros estudantes possam realizar o cadastro!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Finalizado!',
          text: 'Processo seletivo Finalizado!!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  cancelarProcessoSeletivo() {
    Swal.fire({
      title: 'Deseja realmente cancelar esse processo seletivo?',
      text: 'Ao confirmar, esse processo seletivo será cancelado permanentemente!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Cancelado!',
          text: 'Processo seletivo Cancelado!!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }
}

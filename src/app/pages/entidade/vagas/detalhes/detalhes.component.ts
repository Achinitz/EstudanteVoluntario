import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';
import { DetalheEstudanteComponent } from './detalhe-estudante/detalhe-estudante.component';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'],
})
export class DetalhesComponent implements OnInit, OnDestroy {
  vaga: any;
 
  constructor(
    private dataService: DataService,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.vaga = this.dataService.data;
    if (this.dataService.data.nomeEntidade == null) {
      this.router.navigate(['/Entidade/vagas']);
    }
  }

  visualizarCandidato(inscricao: any) {
    // this.router.navigate(['/Entidade/detalhe-estudante']);
    const modalRef = this.modalService.open(DetalheEstudanteComponent, {
      windowClass: 'min-width: 80%; heigth: 50%;',
      centered: true,
    });
    modalRef.componentInstance.inscricao = inscricao; 
    modalRef.result;
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

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.dataService.data = this.vaga;
  }
}

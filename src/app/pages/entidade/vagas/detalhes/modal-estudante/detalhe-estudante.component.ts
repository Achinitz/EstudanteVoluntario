import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Estudante } from 'src/app/models/estudante';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalhe-estudante',
  templateUrl: './detalhe-estudante.component.html',
  styleUrls: ['./detalhe-estudante.component.scss'],
})
export class DetalheEstudanteComponent implements OnInit {
  @Input() inscrito: Estudante;
  @Input() statusInscricao: string;

  constructor(public activeModal: NgbActiveModal) {}

  aprovarCandidato() {
    Swal.fire({
      title: 'Deseja aprovar esse candidato para essa vaga?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Candidato aprovado com sucesso!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          this.activeModal.close('Aprovado');
        });
      }
    });
  }

  reprovarCandidato() {
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
        }).then(() => {
          this.activeModal.close('Reprovado');
        });
      }
    });
  }

  ngOnInit(): void {}
}

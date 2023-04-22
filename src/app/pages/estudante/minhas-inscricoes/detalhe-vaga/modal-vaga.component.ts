import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-vaga',
  templateUrl: './modal-vaga.component.html',
  styleUrls: ['./modal-vaga.component.scss'],
})
export class ModalVagaComponent implements OnInit, OnDestroy {
  @Input() vagaSelecionada: any;

  constructor(
    private data: DataService,
    private router: Router,
    public activeModal: NgbActiveModal
  ) {}

  retornar() {
    this.router.navigate(['/Estudante/minhas-inscricoes']);
    // this.modalService.open(DetalheVagaAdministradorComponent, { windowClass: 'width:90%; heigth: 50%;', backdrop: 'static', keyboard: false, centered: true });
  }

  cancelar() {
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
        Swal.fire({
          title: 'Inscrição cancelada com sucesso!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    console.log(
      ' ******** ' + this.vagaSelecionada.nomeEntidade + ' ******** '
    );
  }
}

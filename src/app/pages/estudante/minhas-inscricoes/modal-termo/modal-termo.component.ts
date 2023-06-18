import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Entidade } from 'src/app/models/entidade';
import { Estudante } from 'src/app/models/estudante';
import { Vaga } from 'src/app/models/vaga';
import { TermoadesaoService } from 'src/app/services/termoadesao.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-termo',
  templateUrl: './modal-termo.component.html',
  styleUrls: ['./modal-termo.component.scss'],
})
export class ModalTermoComponent implements OnInit {
  @Input() estudante: Estudante;
  @Input() termo: any;
  @Input() entidade: Entidade;
  @Input() vaga: Vaga;

  public dia = new Date().getDate();
  public mes = new Date().toLocaleString('default', { month: 'long' });
  public ano = new Date().getFullYear();
  private _location: any;

  constructor(
    public activeModal: NgbActiveModal,
    private termoAdesaoService: TermoadesaoService
  ) {}

  ngOnInit(): void {}

  aceitarTermo() {
    Swal.fire({
      title: 'Deseja realmente aceitar o Termo de Adesão?',
      text: 'Ao confirmar, você aceitará as condições da vaga.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.termoAdesaoService
          .aceitarTermo(this.estudante.userid._id, this.termo._id)
          .subscribe({
            next: (res: any) => {
              console.log(res.message);
            },
          });
        Swal.fire({
          title: 'O Termo de Adesão foi aceito com sucesso!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
        this.activeModal.close(window.location.reload());
      }
    });
  }

  backClicked() {
    this._location.back();
  }
}

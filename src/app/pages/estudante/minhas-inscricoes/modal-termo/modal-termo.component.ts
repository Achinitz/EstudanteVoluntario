import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-termo',
  templateUrl: './modal-termo.component.html',
  styleUrls: ['./modal-termo.component.scss'],
})
export class ModalTermoComponent implements OnInit {
  @Input() vagaSelecionada: any;
  @Input() estudante: any;
  @Input() entidade: any;

  public dia = new Date().getDate();
  public mes = new Date().toLocaleString('default', { month: 'long' });  
  public ano = new Date().getFullYear();

  constructor(
    private data: DataService,
    private router: Router,
    public activeModal: NgbActiveModal
  ) {}

 
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
        Swal.fire({
          title: 'O Termo de Adesão foi aceito com sucesso!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  
  }
  ngOnInit(): void {}
}

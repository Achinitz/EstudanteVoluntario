import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-validar-entidade-modal',
  templateUrl: './validar-entidade-modal.component.html',
  styleUrls: ['./validar-entidade-modal.component.scss']
})
export class ValidarEntidadeModalComponent implements OnInit {

  constructor(private dataService:DataService, public activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }

  aprovar(){
    Swal.fire({
      icon: 'success',
      title: 'Estudante aprovado com sucesso!!',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  reprovar(){
    Swal.fire({
      title: 'Deseja realmente reprovar esse cadastro?',
      text: "Ao confirmar, esse cadastro será reprovado!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Estudante aprovado com Sucesso!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

}

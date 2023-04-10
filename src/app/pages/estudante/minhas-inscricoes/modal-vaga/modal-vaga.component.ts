import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-vaga',
  templateUrl: './modal-vaga.component.html',
  styleUrls: ['./modal-vaga.component.scss']
})
export class ModalVagaComponent implements OnInit {

  constructor() { }

  

  cancelar(){
    Swal.fire({
      title: 'Deseja realmente reprovar essa vaga?',
      text: "Ao confirmar, essa vaga será reprovada!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Vaga reprovada com Sucesso!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

  ngOnInit(): void {
  }

}

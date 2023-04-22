import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalhe-vaga',
  templateUrl: './detalhe-vaga.component.html',
  styleUrls: ['./detalhe-vaga.component.scss']
})
export class DetalheVagaComponent implements OnInit {
  
  vaga: any;
  
  constructor(private dataService: DataService, private router: Router) { 
    this.vaga = this.dataService.data;
    
  }

  ngOnInit(): void {
  }

 //Quando o usuário clicar no botão para cancelar a inscrição
 cancelarInscricao() {
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

//Quando o usuário clicar no botão para se inscrever
confirmarInscricao() {
  Swal.fire({
    title: 'Deseja realmente se inscrever nessa vaga?',
    text: 'Ao confirmar, você será inscrito nessa vaga.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Confirmar',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Inscrição realizada com sucesso!',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  });

}

}

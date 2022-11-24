import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-validar-estudante-modal',
  templateUrl: './validar-estudante-modal.component.html',
  styleUrls: ['./validar-estudante-modal.component.scss']
})
export class ValidarEstudanteModalComponent implements OnInit {

  vaga: any = {
    tituloVaga: 'Contador de Historia',
    dataPublicacao: '28/08/2021',
    horarioInicio: 'Analise de Sistemas',
    horarioEncerramento: 'Analise de Sistemas',
    numeroVagas: 22,
    descricao: 'Uma vaga Legal',
    status: '15/05/2022',
    auxilio: 'Sim',
    obseracao: 'Possuir a unha cortada',
    tipoCandidatura: 'Nao sei',
  } 

  constructor(private dataService:DataService, public activeModal:NgbActiveModal) { }

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

  ngOnInit(): void {
  }

}

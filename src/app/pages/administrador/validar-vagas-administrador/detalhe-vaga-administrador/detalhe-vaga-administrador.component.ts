import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalhe-vaga-administrador',
  templateUrl: './detalhe-vaga-administrador.component.html',
  styleUrls: ['./detalhe-vaga-administrador.component.scss']
})
export class DetalheVagaAdministradorComponent implements OnInit {

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

  constructor(private dataService:DataService,public activeModal: NgbActiveModal) { 

  }

  aprovar(){
    Swal.fire({
      icon: 'success',
      title: 'Vaga aprovada com sucesso!!',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  reprovar(){
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

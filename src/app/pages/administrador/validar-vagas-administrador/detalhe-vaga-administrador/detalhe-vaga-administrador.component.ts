import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalhe-vaga-administrador',
  templateUrl: './detalhe-vaga-administrador.component.html',
  styleUrls: ['./detalhe-vaga-administrador.component.scss']
})
export class DetalheVagaAdministradorComponent implements OnInit {

  validacao: any;
  validacoes: any = [
    {id: 1, nome: 'Aprovar'},
    {id: 2, nome: 'Reprovar'},
  ]

  vaga: any;

  constructor(private data:DataService,private modalService: NgbModal, 
    public dialog: MatDialog, private router: Router) { 
    this.vaga = this.data.data;
  }

  aprovar(){
    Swal.fire({
      icon: 'success',
      title: 'Vaga avaliada com sucesso!!',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  retornar(){
    this.router.navigate(['/Administrador/validar-vagas']);
    // this.modalService.open(DetalheVagaAdministradorComponent, { windowClass: 'width:90%; heigth: 50%;', backdrop: 'static', keyboard: false, centered: true });
  }

  exibirDetalhes(){
    this.modalService.open(DetalheVagaAdministradorComponent, { windowClass: 'width:90%; heigth: 50%;', backdrop: 'static', keyboard: false, centered: true });
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

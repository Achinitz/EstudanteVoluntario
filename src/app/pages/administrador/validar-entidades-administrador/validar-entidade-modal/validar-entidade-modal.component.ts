import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-validar-entidade-modal',
  templateUrl: './validar-entidade-modal.component.html',
  styleUrls: ['./validar-entidade-modal.component.scss']
})
export class ValidarEntidadeModalComponent implements OnInit {

  formResolucao = new FormGroup({
    resolucaoChamado: new FormControl(null, Validators.required),
    motivo: new FormControl(),
    cnpj: new FormControl(null, Validators.required),
  });


  validacao: any;
  validacoes: any = [
    {id: 1, nome: 'Aprovar'},
    {id: 2, nome: 'Reprovar'},
  ]

  entidade: any;

  constructor(private data:DataService,private modalService: NgbModal, 
    public dialog: MatDialog, private router: Router) { 
    this.entidade = this.data.data;

    this.formResolucao.get('cnpj').setValue(this.entidade.cnpj);

    if(this.entidade == null){
      this.router.navigate(['/Administrador/validar-entidades']);
    }
    console.log(this.entidade)
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
    this.router.navigate(['/Administrador/validar-entidades']);
    // this.modalService.open(DetalheVagaAdministradorComponent, { windowClass: 'width:90%; heigth: 50%;', backdrop: 'static', keyboard: false, centered: true });
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
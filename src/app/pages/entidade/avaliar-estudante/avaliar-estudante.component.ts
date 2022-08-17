import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';
import { ModalAdicionarAvaliacaoComponent } from './modal-adicionar-avaliacao/modal-adicionar-avaliacao.component';
import { ModalVisualizarComponent } from './modal-visualizar/modal-visualizar.component';

@Component({
  selector: 'app-avaliar-estudante',
  templateUrl: './avaliar-estudante.component.html',
  styleUrls: ['./avaliar-estudante.component.scss']
})
export class AvaliarEstudanteComponent implements OnInit {



  alunos: any = [
    {
      id: 1,
      nome: 'Gustavo',
      cpf: '1234',
    },
    {
      id: 2,
      nome: 'Liaquim',
      cpf: '12345',
    },
    {
      id: 3,
      nome: 'Cesar',
      cpf: '123456',
    },
    {
      id: 4,
      nome: 'Fabiano',
      cpf: '123457',
    },
    {
      id: 5,
      nome: 'Tebutrios',
      cpf: '123458',
    },
    {
      id: 6,
      nome: 'Victor',
      cpf: '123459',
    },  
  ];

  paginaAtual = 1;
  tamanhoPagina: any = this.alunos.length;
  itemsPerPage = 4;
  public filtroAluno: any = this.alunos.slice(0,4);

  constructor(public dialog: MatDialog, private dataService: DataService,private router: Router) { }

  public mudancaPagina(pageNum: number): void {
    this.tamanhoPagina = this.itemsPerPage*(pageNum - 1);
    this.filtroAluno = this.alunos.slice(this.tamanhoPagina, this.tamanhoPagina + 4)
  }

  apagarAvaliacao(){
    Swal.fire({
      title: 'Deseja apagar essa avaliação?',
      text: "Ao confirmar, essa avaliação será excluida permanentemente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Delatado!',
          text: 'Avaliação apagada!!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

  visualizarEditar(){
    const dialogRef = this.dialog.open(ModalVisualizarComponent, {
      width: 'auto',
    });
  }

  adicionarAvaliacao(){
    const dialogRef = this.dialog.open(ModalAdicionarAvaliacaoComponent, {
      width: 'auto',
    });
  }


  ngOnInit(): void {
  }

}

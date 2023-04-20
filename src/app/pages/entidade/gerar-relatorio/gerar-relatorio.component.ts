import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAnexarRelatorioComponent } from './modal-anexar-relatorio/modal-anexar-relatorio.component';

@Component({
  selector: 'app-gerar-relatorio',
  templateUrl: './gerar-relatorio.component.html',
  styleUrls: ['./gerar-relatorio.component.scss']
})
export class GerarRelatorioComponent implements OnInit {


  alunos: any = [
    {
      nome: 'Jeronimo da Silva Santos Pinto Gonçalves',
      cpf: '12345678910',
      status: true,
      vaga: 'Cuidador de Idoso',
      empresa: 'APAE'
    },
    {
      nome: 'Jeronimo da Silva Santos Pinto Gonçalves',
      cpf: '12345678910',
      status: true,
      vaga: 'Cuidador de Idoso',
      empresa: 'APAE'
    },
    {
      nome: 'Jeronimo da Silva Santos Pinto Gonçalves',
      cpf: '12345678910',
      status: false,
      vaga: 'Cuidador de Idoso',
      empresa: 'APAE'
    },
    {
      nome: 'Jeronimo da Silva Santos Pinto Gonçalves',
      cpf: '12345678910',
      status: false,
      vaga: 'Cuidador de Idoso',
      empresa: 'APAE'
    }
  ]

  paginaAtual = 1;
  tamanhoPagina: any = this.alunos.length;
  itemsPerPage = 4;
  public filtroAluno: any = this.alunos.slice(0,4);

  constructor(private modalService: NgbModal, public dialog: MatDialog,) { }

  public mudancaPagina(pageNum: number): void {
    this.tamanhoPagina = this.itemsPerPage*(pageNum - 1);
    this.filtroAluno = this.alunos.slice(this.tamanhoPagina, this.tamanhoPagina + 4)
  }

  anexarRelatorioEstudante(aluno : any){
    const modalRef = this.modalService.open(ModalAnexarRelatorioComponent, { windowClass: 'auto', backdrop: 'static', centered: true });
    modalRef.componentInstance.vagaSelecionada = aluno;
  }

  ngOnInit(): void {
  }

}

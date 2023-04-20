import { Component, OnInit } from '@angular/core';

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
      status: 'Não encaminhado',
      vaga: 'Cuidador de Idoso',
      empresa: 'APAE'
    },
    {
      nome: 'Jeronimo da Silva Santos Pinto Gonçalves',
      cpf: '12345678910',
      status: 'Não encaminhado',
      vaga: 'Cuidador de Idoso',
      empresa: 'APAE'
    },
    {
      nome: 'Jeronimo da Silva Santos Pinto Gonçalves',
      cpf: '12345678910',
      status: 'Não encaminhado',
      vaga: 'Cuidador de Idoso',
      empresa: 'APAE'
    },
    {
      nome: 'Jeronimo da Silva Santos Pinto Gonçalves',
      cpf: '12345678910',
      status: 'Não encaminhado',
      vaga: 'Cuidador de Idoso',
      empresa: 'APAE'
    }
  ]

  paginaAtual = 1;
  tamanhoPagina: any = this.alunos.length;
  itemsPerPage = 4;
  public filtroAluno: any = this.alunos.slice(0,4);

  constructor() { }

  public mudancaPagina(pageNum: number): void {
    this.tamanhoPagina = this.itemsPerPage*(pageNum - 1);
    this.filtroAluno = this.alunos.slice(this.tamanhoPagina, this.tamanhoPagina + 4)
  }

  ngOnInit(): void {
  }

}

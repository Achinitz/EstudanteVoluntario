import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificado',
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.scss']
})
export class CertificadoComponent implements OnInit {


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

  constructor() { }

  public mudancaPagina(pageNum: number): void {
    this.tamanhoPagina = this.itemsPerPage*(pageNum - 1);
    this.filtroAluno = this.alunos.slice(this.tamanhoPagina, this.tamanhoPagina + 4)
  }

  ngOnInit(): void {
  }


}

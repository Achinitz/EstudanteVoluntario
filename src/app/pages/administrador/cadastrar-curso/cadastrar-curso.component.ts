import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-curso',
  templateUrl: './cadastrar-curso.component.html',
  styleUrls: ['./cadastrar-curso.component.scss'],
})
export class CadastrarCursoComponent implements OnInit {

  instituicoes: any = [
    {
      id: 1,
      cnpj: 75054940000162,
      sigla: 'UFPR',
      nome: 'Universidade Federal do Paraná',
      uf: 'Paraná',
    },
    {
      id: 2,
      cnpj: 75054940000162,
      sigla: 'UTFPR',
      nome: 'Universidade Tecnológica Federal do Paraná',
      uf: 'Paraná',
    },
    {
      id: 3,
      cnpj: 75054940000162,
      sigla: 'PUCPR',
      nome: 'Pontifícia Universidade Católica do Paraná',
      uf: 'Paraná',
    },
    {
      id: 4,
      cnpj: 75054940000162,
      sigla: 'UNESPAR',
      nome: 'Universidade Estadual do Paraná',
      uf: 'Paraná',
    },
    {
      id: 5,
      cnpj: 75054940000162,
      sigla: 'UNILA',
      nome: 'Universidade Federal da Integração Latino-América',
      uf: 'Paraná',
    },
    {
      id: 6,
      cnpj: 75054940000162,
      sigla: 'UEPG',
      nome: 'Universidade Estadual de Ponta Grossa',
      uf: 'Paraná',
    },
  ];

  
  constructor() {}
  
  ngOnInit(): void {}
}

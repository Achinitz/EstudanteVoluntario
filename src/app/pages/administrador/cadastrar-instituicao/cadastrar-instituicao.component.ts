import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-instituicao',
  templateUrl: './cadastrar-instituicao.component.html',
  styleUrls: ['./cadastrar-instituicao.component.scss']
})
export class CadastrarInstituicaoComponent implements OnInit {

  instituicoes: any = [
    {
      cnpj: 75054940000162,
      nome: 'Fundação',
      cidade: 'Curitiba'
    },
    {
      cnpj: 75054940000162,
      nome: 'UFPR',
      cidade: 'Curitiba'
    },
    {
      cnpj: 75054940000162,
      nome: 'Aurora',
      cidade: 'Curitiba'
    },
    {
      cnpj: 75054940000162,
      nome: 'Sadia',
      cidade: 'Curitiba'
    },
    {
      cnpj: 75054940000162,
      nome: 'Paula Fernandes',
      cidade: 'Curitiba'
    },
    {
      cnpj: 75054940000162,
      nome: 'Sandy',
      cidade: 'Curitiba'
    },
    {
      cnpj: 75054940000162,
      nome: 'Junior',
      cidade: 'Curitiba'
    },
    {
      cnpj: 75054940000162,
      nome: 'Avril',
      cidade: 'Curitiba'
    },
    {
      cnpj: 75054940000162,
      nome: 'Jhon',
      cidade: 'Curitiba'
    },
    {
      cnpj: 75054940000162,
      nome: 'Alcione',
      cidade: 'Curitiba'
    },
    {
      cnpj: 75054940000162,
      nome: 'Betina',
      cidade: 'Curitiba'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

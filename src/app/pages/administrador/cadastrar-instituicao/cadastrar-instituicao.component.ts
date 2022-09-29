import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-instituicao',
  templateUrl: './cadastrar-instituicao.component.html',
  styleUrls: ['./cadastrar-instituicao.component.scss']
})
export class CadastrarInstituicaoComponent implements OnInit {

  instituicoes: any = [
    {
      cnpj: 1234567891011,
      nome: 'Fundação',
      cidade: 'Curitiba'
    },
    {
      cnpj: 1234567891012,
      nome: 'UFPR',
      cidade: 'Curitiba'
    },
    {
      cnpj: 1234567891013,
      nome: 'Aurora',
      cidade: 'Curitiba'
    },
    {
      cnpj: 1234567891014,
      nome: 'Sadia',
      cidade: 'Curitiba'
    },
    {
      cnpj: 1234567891015,
      nome: 'Paula Fernandes',
      cidade: 'Curitiba'
    },
    {
      cnpj: 1234567891016,
      nome: 'Sandy',
      cidade: 'Curitiba'
    },
    {
      cnpj: 1234567891017,
      nome: 'Junior',
      cidade: 'Curitiba'
    },
    {
      cnpj: 1234567891018,
      nome: 'Avril',
      cidade: 'Curitiba'
    },
    {
      cnpj: 1234567891019,
      nome: 'Jhon',
      cidade: 'Curitiba'
    },
    {
      cnpj: 1234567891010,
      nome: 'Alcione',
      cidade: 'Curitiba'
    },
    {
      cnpj: 1234567891011,
      nome: 'Betina',
      cidade: 'Curitiba'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

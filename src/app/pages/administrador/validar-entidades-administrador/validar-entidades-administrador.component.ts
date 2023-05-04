import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-validar-entidades-administrador',
  templateUrl: './validar-entidades-administrador.component.html',
  styleUrls: ['./validar-entidades-administrador.component.scss'],
})
export class ValidarEntidadesAdministradorComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private data: DataService
  ) {}

  //teste
  listaOrdenacao: any = [
    { id: 1, nome: 'Mais antigos' },
    { id: 2, nome: 'Mais recentes' },
  ];

  entidadesAprovacao: any = [
    {
      id: 1,
      nomeFantasia: 'Amigos do HC',
      razaoSocial: 'Associação dos Amigos do Hospital de Clínicas',
      cnpj: '75054940000162',      
      email: 'firma@email.com',
      telefone: '41996683953',     
      nomeResponsavelCadastro: 'Nome responsável', 
      cidade: 'Curitiba',
      estado: 'PR',
      numero: 41,
      logradouro: 'Rua Amador Bueno',
      bairro: 'Cajuru',
      cep: '82960-020',
      dataCriacao:'20/02/2023',
      status: 'Aprovação',
    },
    {
      id: 2,
      nomeFantasia: 'Instituto Incanto',
      razaoSocial: 'Incanto - Instituto de Cultura, Arte e Novas Tecnologias',
      cnpj: '75054940000162',      
      email: 'firma@email.com',
      telefone: '41996683953',     
      nomeResponsavelCadastro: 'Nome responsável', 
      cidade: 'Curitiba',
      estado: 'PR',
      numero: 41,
      logradouro: 'Rua Amador Bueno',
      bairro: 'Cajuru',
      cep: '82960-020',
      dataCriacao:'20/02/2023',
      status: 'Aprovação',
    },
  ];

  paginaAtual = 1;
  tamanhoPagina: number = this.entidadesAprovacao.length;
  itemsPerPage = 6;
  tipoOrdenacao: any;
  public vagas: any = this.entidadesAprovacao.slice(0, 6);

  public mudancaPagina(pageNum: number): void {
    this.tamanhoPagina = this.itemsPerPage*(pageNum - 1);
    this.vagas = this.entidadesAprovacao.slice(this.tamanhoPagina, this.tamanhoPagina + 6)
  }

  redirecionarDetalhes(value: any) {
    this.data.data = value;
    this.router.navigate(['/Admin/validar-entidade']);
  }

  ordenarLista() {
    console.log('Lista Ordenada');
  }
 

  ngOnInit(): void {}
}

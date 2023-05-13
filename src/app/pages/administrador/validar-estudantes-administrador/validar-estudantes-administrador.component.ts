import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-validar-estudantes-administrador',
  templateUrl: './validar-estudantes-administrador.component.html',
  styleUrls: ['./validar-estudantes-administrador.component.scss'],
})
export class ValidarEstudantesAdministradorComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private data: DataService
  ) {}

  listaOrdenacao: any = [
    { id: 1, nome: 'Mais antigos' },
    { id: 2, nome: 'Mais recentes' },
  ];

  estudantesAprovacao: any = [
    {
      id: 1,
      cpf:'11111111111',
      nomeCompleto: 'Gustavo de Oliveira Achinitz',
      nomeSocial: 'Natasha de Oliveira',
      identificacaoGenero: 'Transexual',
      dataNascimento: '01/03/1997',
      email: 'gustavoachinitz@gmail.com',
      telefone: '41996683953',     
      cep: '82960-020',
      logradouro: 'rua tal',
      numero: '1133',
      bairro: 'bairro',
      estado: 'Paraná',
      cidade: 'Curitiba',
      complemento: 'Casa',
      dataCriacao: '20/02/2023',
      status: 'Aprovação',
      instituicao: 'UFPR - Universidade Federal do Paraná',
      grau: 'Bacharelado',
      curso: 'ADMINISTRAÇÃO - CAMPUS JARDIM BOTÂNICO',
      anoInicio: '2020',
      anoConclusao: '2025',
      comprovanteMatricula: 'https://uploadev.s3.us-east-1.amazonaws.com/fd1908b9afc86135-TUFS_GenderInMedia-ClassSyllabus.pdf',
    },
  ];

  redirecionarDetalhes(value: any) {
    this.data.data = value;
    this.router.navigate(['/Admin/validar-estudante']);
  }

  ordenarLista() {
    console.log('Lista Ordenada');
  }

  paginaAtual = 1;
  tamanhoPagina: number = this.estudantesAprovacao.length;
  itemsPerPage = 6;
  tipoOrdenacao: any;
  filter: any;
  public filterEstudante: any = this.estudantesAprovacao.slice(0, 6);

  public mudancaPagina(pageNum: number): void {
    this.tamanhoPagina = this.itemsPerPage * (pageNum - 1);
    this.filterEstudante = this.estudantesAprovacao.slice(
      this.tamanhoPagina,
      this.tamanhoPagina + 6
    );
  }

  ngOnInit(): void {}
}

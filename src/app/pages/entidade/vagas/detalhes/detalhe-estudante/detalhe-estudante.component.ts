import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detalhe-estudante',
  templateUrl: './detalhe-estudante.component.html',
  styleUrls: ['./detalhe-estudante.component.scss']
})
export class DetalheEstudanteComponent implements OnInit {

  perfilCadidato: any = {
    nome: 'Gustavo de Oliveira Achinitz',
    idade: '23',
    nomeSocial: 'Natasha de Oliveira',
    curriculum: '',
    foto: '',
    identificacaoGenero: 'Transexual',
    dataNascimento: '01/03/1997',
    email: 'gustavoachinitz@gmail.com',
    telefone: '41996683953',
    cep: '82960-020',
    logradouro: 'casa',
    numero: '1133',
    bairro: 'bairro',
    estado: 'Paraná',
    cidade: 'Curitiba',
    complemento: 'Casa',
    cursos: [
      {nome: 'Torneiro Mecânico', instituicao: 'SENAI', dataInicio: '01/01/2015', dataPrevistoTermino: '12/12/2015', cargaHoraria: '350 Horas', descricao: 'Curso de torneiro mechendo com Torno, fresa e solda.'},
      {nome: 'Técnico em Fabricação Mecânica', instituicao: 'IFSC - Instituto Federal de Santa Catarina', dataInicio: '05/06/2013', dataPrevistoTermino: '12/12/2015', cargaHoraria: '1520 Horas', descricao: ''},
      {nome: 'Analise e Desenvolvimento de Sistemas', instituicao: 'UFPR - Universidade Federal do Paraná', dataInicio: '02/02/2018', dataPrevistoTermino: '15/07/2023', cargaHoraria: '', descricao: 'Curso bom'},
    ],
    experienciasTrabalho: [
      {cargo: 'Estagiário', empresa: 'Tribunal de Contas do Estado do Paraná', dataInicio: '01/03/2019', dataSaide: '12/12/2021', cargaHoraria: '350 Horas', atividades: ''},
      {cargo: 'Estagiário', empresa: 'Tribunal de Contas do Estado do Paraná', dataInicio: '01/03/2019', dataSaide: '12/12/2021', cargaHoraria: '350 Horas', atividades: ''},
      {cargo: 'Estagiário', empresa: 'Tribunal de Contas do Estado do Paraná', dataInicio: '01/03/2019', dataSaide: '12/12/2021', cargaHoraria: '350 Horas', atividades: ''},
    ],
    certificados: [
      {curso: 'SCRUM MASTER', instituicao: 'Scrum', cargaHoraria: '350 Horas', descricao: 'Scrum master.'},
    ],
  }

  @Input() candidato: any;

  constructor(private data:DataService, private router: Router, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

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
      {nome: 'Torneiro Mecânico', instituicao: 'SENAI', dataInicio: '01/01/2015', dataPrevistoTermino: '12/12/2015', cargaHoraria: '350 Horas', descricao: 'Curso de torneiro mechendo com Torno, fresa e solda.', situacao: 'Concluido'},
      {nome: 'Técnico em Fabricação Mecânica', instituicao: 'IFSC - Instituto Federal de Santa Catarina', dataInicio: '05/06/2013', dataPrevistoTermino: '12/12/2015', cargaHoraria: '1520 Horas', descricao: '', situacao: 'Concluido'},
      {nome: 'Analise e Desenvolvimento de Sistemas', instituicao: 'UFPR - Universidade Federal do Paraná', dataInicio: '02/02/2018', dataPrevistoTermino: '15/07/2023', cargaHoraria: '', descricao: 'Curso bom', situacao: 'Concluido'},
    ],
    experienciasTrabalho: [
      {cargo: 'Estagiário', empresa: 'Tribunal de Contas do Estado do Paraná', dataInicio: '01/03/2019', dataSaide: '12/12/2021', cargaHoraria: '350 Horas', atividades: ''},
    ],
    certificados: null,
  }

  @Input() candidato: any;

  constructor(private data:DataService, private router: Router, public activeModal: NgbActiveModal) { }

  downloadCertificado(certificado:any){

  }

  aprovarCandidato(){
    Swal.fire({
      title: 'Deseja aprovar esse candidato para essa vaga?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Candidato aprovado com sucesso!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        }).then(
          () => {
            this.activeModal.close('Aprovado');
          }
        )
      }
    })
  }

  reprovarCandidato(){
    Swal.fire({
      title: 'Deseja reprovar esse candidato para essa vaga?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Candidato Reprovado com sucesso!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        }).then(
          () => {
            this.activeModal.close('Reprovado');
          }
        )
      }
    })
  }

  ngOnInit(): void {
  }

}

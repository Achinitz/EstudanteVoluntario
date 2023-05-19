import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalhe-estudante',
  templateUrl: './detalhe-estudante.component.html',
  styleUrls: ['./detalhe-estudante.component.scss'],
})
export class DetalheEstudanteComponent implements OnInit {
  @Input() inscricao: any;

  //buscar os dados do Estudante de acordo com o ID da inscrição
  perfilCandidato: any = {
    nome: 'Gustavo de Oliveira Achinitz',
    nomeSocial: 'Natasha de Oliveira',
    identificacaoGenero: 'Transexual',
    dataNascimento: '01/03/1997',
    email: 'gustavoachinitz@gmail.com',
    telefone: '41996683953',
    cep: '82960-020',
    logradouro: 'casa',
    numero: '1133',
    bairro: 'bairro',
    estado: 'PR',
    cidade: 'Curitiba',
    complemento: 'Casa',
    curso: 'Tecnologia em Análise de Sistemas',
    grau: 'Tecnologia',
    instituicao: 'SENAI',
    anoInicio: '2015',
    anoConclusao: '2025',
    experienciasAnteriores: null,
    areasInteresse: null,
    status: 'Inscrito'      
  };

  constructor(
    private data: DataService,
    private router: Router,
    public activeModal: NgbActiveModal
  ) {}

  downloadCertificado(certificado: any) {}

  aprovarCandidato() {
    Swal.fire({
      title: 'Deseja aprovar esse candidato para essa vaga?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Candidato aprovado com sucesso!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          this.activeModal.close('Aprovado');
        });
      }
    });
  }

  reprovarCandidato() {
    Swal.fire({
      title: 'Deseja reprovar esse candidato para essa vaga?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Candidato Reprovado com sucesso!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          this.activeModal.close('Reprovado');
        });
      }
    });
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { ModalVagaComponent } from './modal-inscricao/modal-vaga.component';
import { ModalTermoComponent } from './modal-termo/modal-termo.component';

@Component({
  selector: 'app-minhas-inscricoes',
  templateUrl: './minhas-inscricoes.component.html',
  styleUrls: ['./minhas-inscricoes.component.scss'],
})
export class MinhasInscricoesComponent implements OnInit {
  inscricoes: any = [
    {
      id: 1,
      idEntidade: 1,
      nomeEntidade: 'ONG 1',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos: 'Sem requisitos',
      auxilio: 'Alimentação e Transporte',
      endereco: 'Rua tal dos omi lá',
      bairro: 'Cajuru',
      numero: '23',
      cidade: 'Curitiba',
      estado: 'Paraná',
      cep: '81700-000',
      complemento: 'Prédio Comercial',
      dataFinalizacaoVaga: '20/02/2023 23:59:00',
      dataInicioTrabalho: '20/02/2023',
      dataTerminoTrabalho: '21/02/2023',
      horarioInicio: '08:00',
      horarioEncerramento: '12:00',
      numeroVagas: '3',
      status: 'Aprovado',
      inscrito: true,
      termo: false,
      
    },
    {
      id: 2,
      idEntidade: 2,
      nomeEntidade: 'ONG 2',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos: 'Sem requisitos',
      auxilio: 'Alimentação e Transporte',
      endereco: 'Rua tal dos omi lá',
      bairro: 'Cajuru',
      numero: '23',
      cidade: 'Curitiba',
      estado: 'Paraná',
      cep: '81700-000',
      complemento: 'Prédio Comercial',
      dataFinalizacaoVaga: '20/02/2023 23:59:00',
      dataInicioTrabalho: '20/02/2023',
      dataTerminoTrabalho: '21/02/2023',
      horarioInicio: '08:00',
      horarioEncerramento: '12:00',
      numeroVagas: '3',
      status: 'Aprovado',
      inscrito: true,
      termo: true,
      aceiteTermo: '20/02/2023',
    },

    {
      id: 3,
      idEntidade: 3,
      nomeEntidade: 'ONG 3',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos: 'Sem requisitos',
      auxilio: null,
      endereco: 'Rua tal dos omi lá',
      bairro: 'Cajuru',
      numero: '23',
      cidade: 'Curitiba',
      estado: 'Paraná',
      cep: '81700-000',
      complemento: 'Prédio Comercial',
      dataFinalizacaoVaga: '20/02/2023 23:59:00',
      dataInicioTrabalho: '20/02/2023',
      dataTerminoTrabalho: '21/02/2023',
      horarioInicio: '08:00',
      horarioEncerramento: '12:00',
      numeroVagas: '3',
      status: 'Inscrito',
      inscrito: true,
      aceiteTermo: '20/02/2023',
    },

    {
      id: 4,
      idEntidade: 4,
      nomeEntidade: 'ONG 4',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos: 'Sem requisitos',
      auxilio: null,
      endereco: 'Rua tal dos omi lá',
      bairro: 'Cajuru',
      numero: '23',
      cidade: 'Curitiba',
      estado: 'Paraná',
      cep: '81700-000',
      complemento: 'Prédio Comercial',
      dataFinalizacaoVaga: '20/02/2023 23:59:00',
      dataInicioTrabalho: '20/02/2023',
      dataTerminoTrabalho: '21/02/2023',
      horarioInicio: '08:00',
      horarioEncerramento: '12:00',
      numeroVagas: '3',
      status: 'Avaliado',
      inscrito: true,
      termo: true,
      aceiteTermo: '20/02/2023',
    },
    {
      id: 5,
      idEntidade: 5,
      nomeEntidade: 'ONG 5',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos: 'Sem requisitos',
      auxilio: null,
      endereco: 'Rua tal dos omi lá',
      bairro: 'Cajuru',
      numero: '23',
      cidade: 'Curitiba',
      estado: 'Paraná',
      cep: '81700-000',
      complemento: 'Prédio Comercial',
      dataFinalizacaoVaga: '20/02/2023 23:59:00',
      dataInicioTrabalho: '20/02/2023',
      dataTerminoTrabalho: '21/02/2023',
      horarioInicio: '08:00',
      horarioEncerramento: '12:00',
      numeroVagas: '3',
      status: 'Reprovado',
      inscrito: true,
    },
  ];

  estudante: any = {
    id: 1,
    cpf: '11111111111',
    nomeCompleto: 'Gustavo de Oliveira Achinitz',
    dataNascimento: '01/03/1997',
    email: 'gustavoachinitz@gmail.com',
    estadoCivil: 'Solteiro(a)',
    telefone: '41996683953',
    cep: '82960-020',
    logradouro: 'rua tal',
    numero: '1133',
    bairro: 'bairro',
    estado: 'Paraná',
    cidade: 'Curitiba',
    complemento: 'Casa',
  };

  entidade: any = {
    id: 2,
    nomeFantasia: 'Instituto Incanto',
    razaoSocial: 'Incanto - Instituto de Cultura, Arte e Novas Tecnologias',
    cnpj: '75054940000162',
    email: 'firma@email.com',
    telefone: '41996683953',
    cidade: 'Curitiba',
    estado: 'PR',
    numero: 41,
    logradouro: 'Rua Amador Bueno',
    bairro: 'Cajuru',
    cep: '82960-020',
  };

  constructor(private modalService: NgbModal, public dialog: MatDialog) {}

  cancelarInscricao() {
    Swal.fire({
      title: 'Deseja realmente cancelar a sua inscrição nessa vaga?',
      text: 'Ao confirmar, a sua inscrição nessa vaga será cancelada!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Inscrição cancelada com sucesso!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  visualizarInscricao(Vaga: any) {
    const modalRef = this.modalService.open(ModalVagaComponent, {
      windowClass: 'auto',
      backdrop: 'static',
      centered: true,
    });
    modalRef.componentInstance.vagaSelecionada = Vaga;
  }

  aceitarTermo(Vaga: any) {
    //buscar dados do estudante e da entidade

    const modalRef = this.modalService.open(ModalTermoComponent, {
      windowClass: 'auto',
      backdrop: 'static',
      scrollable: true,
      centered: true,
    });
    modalRef.componentInstance.vagaSelecionada = Vaga;
    modalRef.componentInstance.estudante = this.estudante;
    modalRef.componentInstance.entidade = this.entidade;
  }

  ngOnInit(): void {}
}

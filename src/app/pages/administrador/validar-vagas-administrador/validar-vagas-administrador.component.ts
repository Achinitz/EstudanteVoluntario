import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetalheVagaAdministradorComponent } from './detalhe-vaga-administrador/detalhe-vaga-administrador.component';

@Component({
  selector: 'app-validar-vagas-administrador',
  templateUrl: './validar-vagas-administrador.component.html',
  styleUrls: ['./validar-vagas-administrador.component.scss']
})
export class ValidarVagasAdministradorComponent implements OnInit {

  vagasDisponiveis: any = [
    {
      id: 1,
      nomeEntidade: 'APAE 1',
      nomeVaga: 'Contador de História',      
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto',
      inscritos: 5
    },
    {
      id: 2,
      nomeEntidade: 'APAE 2',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto',
      inscritos: 3
    },
    {
      id: 3,
      nomeEntidade: 'APAE 3',
      nomeVaga: 'Contador de História',      
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto',
      inscritos: 6
    },
    {
      id: 4,
      nomeEntidade: 'APAE 4',
      nomeVaga: 'Contador de História',      
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto',
      inscritos: 8
    },
    {
      id: 5,
      nomeEntidade: 'APAE 5',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto',
      inscritos: 2
    },
    {
      id: 6,
      nomeEntidade: 'APAE 6',
      nomeVaga: 'Contador de História',      
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto',
      inscritos: 9
    },
    {
      id: 7,
      nomeEntidade: 'APAE 7',
      nomeVaga: 'Contador de História',      
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto',
      inscritos: 2
    },
    {
      id: 8,
      nomeEntidade: 'APAE 8',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto',
      inscritos: 4
    },
    {
      id: 3,
      nomeEntidade: 'APAE 9',
      nomeVaga: 'Contador de História',      
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto',
      inscritos: 7
    },
    {
      id: 9,
      nomeEntidade: 'APAE 10',
      nomeVaga: 'Contador de História',      
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto',
      inscritos: 10
    },
    {
      id: 5,
      nomeEntidade: 'APAE 11',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto',
      inscritos: 51
    },
    {
      id: 6,
      nomeEntidade: 'APAE 12',
      nomeVaga: 'Contador de História',      
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto',
      inscritos: 17
    },
  ];

  paginaAtual = 1;
  tamanhoPagina: number = this.vagasDisponiveis.length;
  itemsPerPage = 6;
  public vagas: any = this.vagasDisponiveis.slice(0,6);

  constructor(private modalService: NgbModal, public dialog: MatDialog) { }

  public mudancaPagina(pageNum: number): void {
    this.tamanhoPagina = this.itemsPerPage*(pageNum - 1);
    this.vagas = this.vagasDisponiveis.slice(this.tamanhoPagina, this.tamanhoPagina + 6)
  }

  exibirDetalhes(){
    this.modalService.open(DetalheVagaAdministradorComponent, { windowClass: 'width:90%; heigth: 50%;', backdrop: 'static', keyboard: false, centered: true });
  }

  ngOnInit(): void {
  }

}

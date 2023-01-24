import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import { DetalheVagaAdministradorComponent } from './detalhe-vaga-administrador/detalhe-vaga-administrador.component';

@Component({
  selector: 'app-validar-vagas-administrador',
  templateUrl: './validar-vagas-administrador.component.html',
  styleUrls: ['./validar-vagas-administrador.component.scss']
})
export class ValidarVagasAdministradorComponent implements OnInit {

  listaOrdenacao: any = [
    {id: 1, nome: 'Mais antigos'},
    {id: 2, nome: 'Mais recentes'}
  ]

  vagasDisponiveis: any = [
    {
      id: 1,
      nomeEntidade: 'APAE 1',
      nomeVaga: 'Voluntário Contador de Histórias',      
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto',
      cidade: 'Curitiba',
      estado: 'PR',
      numero: 41,
      rua: 'Rua Amador Bueno',
      bairro: 'Cajuru',
      cep: '82960-020',
      obrigacoes: [
        {id: 1, nome: 'Escrever Conteúdos'},
        {id: 2, nome: 'Ser Empático e Acolhedor'},
        {id: 3, nome: 'Ser Articulado'},
        {id: 4, nome: 'Incorporar Personagens'},
      ],
      beneficios: [
        {id: 1, nome: 'Refeição no Local'},
        {id: 2, nome: 'Vale transporte'}
      ],
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
  tipoOrdenacao: any;
  public vagas: any = this.vagasDisponiveis.slice(0,6);

  constructor(private modalService: NgbModal, public dialog: MatDialog,
    private router: Router, private data: DataService) { }

  public mudancaPagina(pageNum: number): void {
    this.tamanhoPagina = this.itemsPerPage*(pageNum - 1);
    this.vagas = this.vagasDisponiveis.slice(this.tamanhoPagina, this.tamanhoPagina + 6)
  }

  redirecionarDetalhes(value: any){
    this.data.data = value;
    this.router.navigate(['/Administrador/detalhe-vaga']);
  }

  ordenarLista(){
    console.log('Lista Ordenada')
  }

  ngOnInit(): void {
  }

}

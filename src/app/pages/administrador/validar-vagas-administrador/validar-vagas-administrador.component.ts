import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';

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

  vagasAprovacao: any = [
    {
      id: 1,
      nomeEntidade: 'ONG 1',
      razaoSocial: 'ONG 1',
      email: 'ong1@ong.br',
      telefone: '4135552525',
      nomeVaga: 'Contador de História 1',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec mollis sem. Nullam eu imperdiet est, aliquet malesuada ipsum. Nunc id feugiat orci, et blandit erat.',    
      auxilio:'Alimentação e Transporte',      
      endereco:'Rua tal dos omi lá',
      bairro: 'Cajuru',
      numero: '23',
      cidade: 'Curitiba',
      estado: 'Paraná',
      complemento: 'Prédio Comercial',
      dataCriacao:'20/02/2023',        
      dataInicioTrabalho:'20/02/2023',
      dataTerminoTrabalho:'21/02/2023',
      horarioInicio: '08:00',
      horarioEncerramento:'12:00',
      numeroVagas:'3',
      status: 'Aprovação',     
    },
    {
      id: 6,
      nomeEntidade: 'ONG 6',
      razaoSocial: 'ONG 6',
      email: 'ong6@ong.br',
      nomeVaga: 'Contador de História 6',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos:null,
      auxilio:'100',
      auxilioTransporte: true,
      auxilioAlimentacao: false,
      endereco:'Rua tal dos omi lá',
      bairro: 'Cajuru',
      numero: '23',
      cidade: 'Curitiba',
      estado: 'Paraná',
      complemento: 'Prédio Comercial',
      dataCriacao:'20/01/2023',
      dataInicioTrabalho:'20/02/2023',
      dataTerminoTrabalho:'21/02/2023',
      horarioInicio: '08:00',
      horarioEncerramento:'12:00',
      numeroVagas:'3',
      status: 'Aprovação',           
    },
  ];

  paginaAtual = 1;
  tamanhoPagina: number = this.vagasAprovacao.length;
  itemsPerPage = 6;
  tipoOrdenacao: any;
  public vagas: any = this.vagasAprovacao.slice(0,6);

  constructor(private modalService: NgbModal, public dialog: MatDialog,
    private router: Router, private data: DataService) { }

  public mudancaPagina(pageNum: number): void {
    this.tamanhoPagina = this.itemsPerPage*(pageNum - 1);
    this.vagas = this.vagasAprovacao.slice(this.tamanhoPagina, this.tamanhoPagina + 6)
  }

  redirecionarDetalhes(value: any){
    this.data.data = value;
    this.router.navigate(['/Admin/detalhe-vaga']);
  }

  ordenarLista(){
    console.log('Lista Ordenada')
  }

  ngOnInit(): void {
  }

}
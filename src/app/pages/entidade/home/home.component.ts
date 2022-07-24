import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  

  vagasDisponiveis: any = [
    {
      id: 1,
      nomeEntidade: 'APAE 1',
      nomeVaga: 'Contador de História',      
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto'
    },
    {
      id: 2,
      nomeEntidade: 'APAE 2',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto'
    },
    {
      id: 3,
      nomeEntidade: 'APAE 3',
      nomeVaga: 'Contador de História',      
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto'
    },
    {
      id: 4,
      nomeEntidade: 'APAE 4',
      nomeVaga: 'Contador de História',      
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto'
    },
    {
      id: 5,
      nomeEntidade: 'APAE 5',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto'
    },
    {
      id: 6,
      nomeEntidade: 'APAE 6',
      nomeVaga: 'Contador de História',      
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto'
    },
  ];

  ngOnInit(): void {
  }

}

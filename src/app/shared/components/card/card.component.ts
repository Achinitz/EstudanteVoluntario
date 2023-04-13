import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetalheVagaComponent } from './detalhe-vaga/detalhe-vaga.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  vagasDisponiveis: any = [
    {
      id: 1,
      nomeEntidade: 'APAE',
      nomeVaga: 'Contador de História',      
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto'
    },
    {
      id: 2,
      nomeEntidade: 'APAE',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto'
    },
    {
      id: 3,
      nomeEntidade: 'APAE',
      nomeVaga: 'Contador de História',      
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto'
    },
    {
      id: 4,
      nomeEntidade: 'APAE',
      nomeVaga: 'Contador de História',      
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto'
    },
    {
      id: 5,
      nomeEntidade: 'APAE',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto'
    },
    {
      id: 6,
      nomeEntidade: 'APAE',
      nomeVaga: 'Contador de História',      
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto'
    },
  ];

  constructor(public dialog: MatDialog) { }

  exibirDetalhes(value: any): void {

    const dialogRef = this.dialog.open(DetalheVagaComponent, {
      width: 'auto',
      data: this.vagasDisponiveis[value],
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  ngOnInit(): void {
  }

}

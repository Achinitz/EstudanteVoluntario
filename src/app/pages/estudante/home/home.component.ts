import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VagaDetalhesComponent } from './vaga-detalhes/vaga-detalhes.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nomeEstudante: any = "Teste";
  //vagasCadastradas: any = null;
  vagasCadastradas: any = [
    {
      nomeEntidade: 'Pequeno Cotolengo',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Contador de História',
      status: 'Andamento'
    },
    {
      nomeEntidade: 'APAE',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Auxiliar de Cozinha',
      status: 'Andamento'
    },
    {
      nomeEntidade: 'Erasto',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Jardineiro',
      status: 'Andamento'
    }
  ];

  vagasDisponiveis: any = [
    {
      id: 1,
      nomeEntidade: 'APAE',
      nomeVaga: 'Contador de História',      
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto'
    },
    {
      id: 2,
      nomeEntidade: 'APAE',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto'
    },
    {
      id: 3,
      nomeEntidade: 'APAE',
      nomeVaga: 'Contador de História',      
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto'
    },
    {
      id: 4,
      nomeEntidade: 'APAE',
      nomeVaga: 'Contador de História',      
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto'
    },
    {
      id: 5,
      nomeEntidade: 'APAE',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto'
    },
    {
      id: 6,
      nomeEntidade: 'APAE',
      nomeVaga: 'Contador de História',      
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto'
    },
  ];

  public animal: string = 'Cavalo';
  public name: string = 'Top';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  exibirDetalhes(value: any): void {

    const dialogRef = this.dialog.open(VagaDetalhesComponent, {
      width: 'auto',
      data: this.vagasDisponiveis[value],
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

}

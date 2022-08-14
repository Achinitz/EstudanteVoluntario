import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { CancelarModalComponent } from './cancelar-modal/cancelar-modal.component';
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
      status: 'aberto'
    }
  ];

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
    {
      id: 7,
      nomeEntidade: 'APAE 7',
      nomeVaga: 'Contador de História',      
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto'
    },
    {
      id: 8,
      nomeEntidade: 'APAE 8',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto'
    },
    {
      id: 3,
      nomeEntidade: 'APAE 9',
      nomeVaga: 'Contador de História',      
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto'
    },
    {
      id: 9,
      nomeEntidade: 'APAE 10',
      nomeVaga: 'Contador de História',      
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto'
    },
    {
      id: 5,
      nomeEntidade: 'APAE 11',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto'
    },
    {
      id: 6,
      nomeEntidade: 'APAE 12',
      nomeVaga: 'Contador de História',      
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto'
    },
  ];

  //Variaveis para a paginação
  paginaAtual = 1;
  tamanhoPagina: number = this.vagasDisponiveis.length;
  itemsPerPage = 6;
  public vagas: any = this.vagasDisponiveis.slice(0,6);

  public animal: string = 'Cavalo';
  public name: string = 'Top';

  constructor(public dialog: MatDialog, private dataService: DataService,private router: Router) { }

  ngOnInit(): void {
  }

  public mudancaPagina(pageNum: number): void {
    this.tamanhoPagina = this.itemsPerPage*(pageNum - 1);
    this.vagas = this.vagasDisponiveis.slice(this.tamanhoPagina, this.tamanhoPagina + 6)
  }

  //Vai exibir os detalhes da vaga antes de ele efetivar a inscrição
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

    //Vai exibir uma modal para cadastro com as validações dos dados
    cadastrar(value: any): void {
      this.dataService.data = this.vagasDisponiveis[value];
      this.router.navigate(['/Estudante/DetalheVaga']);
    }

  //Quando o usuário clicar no botão para cancelar a inscrição
  cancelarInscricao(value:any){
    const dialogRef = this.dialog.open(CancelarModalComponent, {
      width: '50%',
      data: this.vagasDisponiveis[value],
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

}

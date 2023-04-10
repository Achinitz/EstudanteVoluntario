import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { CancelarModalComponent } from './cancelar-modal/cancelar-modal.component';
import { VagaDetalhesComponent } from './vaga-detalhes/vaga-detalhes.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  nomeEstudante: any = 'Estudante Teste';

  vagasCadastradas: any = [
    {
      id: 1,
      nomeEntidade: 'ONG 1',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos:'Sem requisitos',
      auxilio:'Não',
      endereco:'Rua tal, numero 23 - Bairro - Curitiba/PR',
      dia:'28/01/2023',
      horarioInicio:'13:00',
      horarioEncerramento:'17:00',
      numeroVagas:'3',
      status: 'Aberto',
      inscrito: false,
    },
    {
      id: 2,
      nomeEntidade: 'ONG 2',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos:'Sem requisitos',
      auxilio:'Não',
      endereco:'Rua tal, numero 23 - Bairro - Curitiba/PR',
      dia:'28/01/2023',
      horarioInicio:'13:00',
      horarioEncerramento:'17:00',
      numeroVagas:'3',
      status: 'Andamento',
      inscrito: true,      
    },

    {
      id: 3,
      nomeEntidade: 'ONG 3',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos:'Sem requisitos',
      auxilio:'Não',
      endereco:'Rua tal, numero 23 - Bairro - Curitiba/PR',
      dia:'28/01/2023',
      horarioInicio:'13:00',
      horarioEncerramento:'17:00',
      numeroVagas:'3',
      status: 'Aberto',
      inscrito: true, 
    },
  ];

  vagasDisponiveis: any = [
    {
      id: 1,
      nomeEntidade: 'ONG 1',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos:'Sem requisitos',
      auxilio:'Não',
      endereco:'Rua tal, numero 23 - Bairro - Curitiba/PR',
      dia:'28/01/2023',
      horarioInicio:'13:00',
      horarioEncerramento:'17:00',
      numeroVagas:'3',
      status: 'Aberto',
      inscrito: false,
    },
    {
      id: 2,
      nomeEntidade: 'ONG 2',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos:'Sem requisitos',
      auxilio:'Não',
      endereco:'Rua tal, numero 23 - Bairro - Curitiba/PR',
      dia:'28/01/2023',
      horarioInicio:'13:00',
      horarioEncerramento:'17:00',
      numeroVagas:'3',
      status: 'Aberto',
      inscrito: false,    
    },

    {
      id: 3,
      nomeEntidade: 'ONG 3',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos:'Sem requisitos',
      auxilio:'Não',
      endereco:'Rua tal, numero 23 - Bairro - Curitiba/PR',
      dia:'28/01/2023',
      horarioInicio:'13:00',
      horarioEncerramento:'17:00',
      numeroVagas:'3',
      status: 'Aberto',
      inscrito: false,
    },
    {
      id: 4,
      nomeEntidade: 'ONG 4',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos:'Sem requisitos',
      auxilio:'Não',
      endereco:'Rua tal, numero 23 - Bairro - Curitiba/PR',
      dia:'28/01/2023',
      horarioInicio:'13:00',
      horarioEncerramento:'17:00',
      numeroVagas:'3',
      status: 'Aberto',
      inscrito: false,
    },
    {
      id: 5,
      nomeEntidade: 'ONG 5',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos:'Sem requisitos',
      auxilio:'Não',
      endereco:'Rua tal, numero 23 - Bairro - Curitiba/PR',
      dia:'28/01/2023',
      horarioInicio:'13:00',
      horarioEncerramento:'17:00',
      numeroVagas:'3',
      status: 'Aberto',
      inscrito: false,
    },
    {
      id: 6,
      nomeEntidade: 'ONG 6',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos:'Sem requisitos',
      auxilio:'Não',
      endereco:'Rua tal, numero 23 - Bairro - Curitiba/PR',
      dia:'28/01/2023',
      horarioInicio:'13:00',
      horarioEncerramento:'17:00',
      numeroVagas:'3',
      status: 'Aberto',
      inscrito: false,
    },
    {
      id: 7,
      nomeEntidade: 'ONG 7',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos:'Sem requisitos',
      auxilio:'Não',
      endereco:'Rua tal, numero 23 - Bairro - Curitiba/PR',
      dia:'28/01/2023',
      horarioInicio:'13:00',
      horarioEncerramento:'17:00',
      numeroVagas:'3',
      status: 'Aberto',
      inscrito: false,
    },
  ];

  //Variaveis para a paginação
  paginaAtual = 1;
  tamanhoPagina: number = this.vagasDisponiveis.length;
  itemsPerPage = 6;
  public vagas: any = this.vagasDisponiveis.slice(0, 6);

  constructor(
    public dialog: MatDialog,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public mudancaPagina(pageNum: number): void {
    this.tamanhoPagina = this.itemsPerPage * (pageNum - 1);
    this.vagas = this.vagasDisponiveis.slice(
      this.tamanhoPagina,
      this.tamanhoPagina + 6
    );
  }

  //Vai exibir os detalhes da vaga antes de ele efetivar a inscrição
  exibirDetalhes(value: any): void {
    const dialogRef = this.dialog.open(VagaDetalhesComponent, {
      width: 'auto',
      data: this.vagasDisponiveis[value],
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');    
    });
  }

  //Vai exibir uma modal para cadastro com as validações dos dados
  cadastrar(value: any): void {
    this.dataService.data = this.vagasDisponiveis[value];
    this.router.navigate(['/Estudante/detalhe-vaga']);
  }

  //Quando o usuário clicar no botão para cancelar a inscrição
  cancelarInscricao(value: any) {
    const dialogRef = this.dialog.open(CancelarModalComponent, {
      width: '50%',
      data: this.vagasDisponiveis[value],
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');    
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss'],
})
export class VagasComponent implements OnInit {
  vagasDisponiveis: any = [
    {
      id: 1,
      nomeEntidade: 'ONG 1',
      nomeVaga: 'Contador de História 1',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec mollis sem. Nullam eu imperdiet est, aliquet malesuada ipsum. Nunc id feugiat orci, et blandit erat.',
      requisitos: 'Habilidade com atendimento ao público.',
      auxilio: 'Alimentação e Transporte',
      endereco: 'Rua tal dos omi lá',
      bairro: 'Cajuru',
      numero: '23',
      cidade: 'Curitiba',
      estado: 'Paraná',
      complemento: 'Prédio Comercial',
      dataAberturaVaga: '28/01/2023 08:00:00',
      dataFinalizacaoVaga: '20/02/2023 23:59:00',
      dataInicioTrabalho: '20/02/2023',
      dataTerminoTrabalho: '21/02/2023',
      horarioInicio: '08:00',
      horarioEncerramento: '12:00',
      numeroVagas: '3',
      status: 'Aberta',
      inscritos: [
        {
          nome: 'Jeronimo',
          img: null,
          cpf: '123',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Inscrito',
        },
        {
          nome: 'Alienigena',
          img: null,
          cpf: '1234',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Inscrito',
        },
        {
          nome: 'Alex',
          img: null,
          cpf: '12345',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Aprovado',
        },
        {
          nome: 'Tebutrios',
          img: null,
          cpf: '123456',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Inscrito',
        },
      ],
    },
    {
      id: 2,
      nomeEntidade: 'ONG 1',
      nomeVaga: 'Contador de História 2',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos: 'Habilidades com preparo de alimentos',
      auxilio: 'Alimentação',
      endereco: 'Rua tal dos omi lá',
      bairro: 'Cajuru',
      numero: '23',
      cidade: 'Curitiba',
      estado: 'Paraná',
      complemento: 'Prédio Comercial',
      dataInicioTrabalho: '20/02/2023',
      dataTerminoTrabalho: '21/02/2023',
      horarioInicio: '08:00',
      horarioEncerramento: '12:00',
      numeroVagas: '3',
      status: 'Aprovação',
    },
    {
      id: 3,
      nomeEntidade: 'ONG 1',
      nomeVaga: 'Contador de História 3',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos: null,
      auxilio: null,
      endereco: 'Rua tal dos omi lá',
      bairro: 'Cajuru',
      numero: '23',
      cidade: 'Curitiba',
      estado: 'Paraná',
      complemento: 'Prédio Comercial',
      dataAberturaVaga: '28/01/2023 08:00:00',
      dataFinalizacaoVaga: '20/02/2023 23:00:00',
      dataInicioTrabalho: '20/02/2023',
      dataTerminoTrabalho: '21/02/2023',
      horarioInicio: '08:00',
      horarioEncerramento: '12:00',
      numeroVagas: '3',
      status: 'Andamento',
      inscritos: [
        {
          nome: 'Jeronimo',
          img: null,
          cpf: '123',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Inscrito',
        },
        {
          nome: 'Alienigena',
          img: null,
          cpf: '1234',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Inscrito',
        },
        {
          nome: 'Alex',
          img: null,
          cpf: '12345',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Aprovado',
        },
        {
          nome: 'Tebutrios',
          img: null,
          cpf: '123456',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Inscrito',
        },
      ],
    },
    {
      id: 4,
      nomeEntidade: 'ONG 1',
      nomeVaga: 'Contador de História 4',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos: null,
      auxilio: '100',
      auxilioTransporte: true,
      auxilioAlimentacao: false,
      endereco: 'Rua tal dos omi lá',
      bairro: 'Cajuru',
      numero: '23',
      cidade: 'Curitiba',
      estado: 'Paraná',
      complemento: 'Prédio Comercial',
      dataAberturaVaga: '28/01/2023 08:00:00',
      dataFinalizacaoVaga: '20/02/2023 23:00:00',
      dia: '28/01/2023',
      horarioInicio: '13:00',
      horarioEncerramento: '17:00',
      numeroVagas: '3',
      status: 'Aberta',
    },
    {
      id: 5,
      nomeEntidade: 'ONG 1',
      nomeVaga: 'Contador de História 5',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos: null,
      auxilio: '100',
      auxilioTransporte: true,
      auxilioAlimentacao: false,
      endereco: 'Rua tal dos omi lá',
      bairro: 'Cajuru',
      numero: '23',
      cidade: 'Curitiba',
      estado: 'Paraná',
      complemento: 'Prédio Comercial',
      dataAberturaVaga: '28/01/2023 08:00:00',
      dataFinalizacaoVaga: '20/02/2023 23:00:00',
      dia: '28/01/2023',
      horarioInicio: '13:00',
      horarioEncerramento: '17:00',
      numeroVagas: '3',
      status: 'Encerrada',
      inscritos: [
        {
          nome: 'Jeronimo',
          img: null,
          cpf: '123',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento',
        },
        {
          nome: 'Alienigena',
          img: null,
          cpf: '1234',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento',
        },
        {
          nome: 'Alex',
          img: null,
          cpf: '12345',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento',
        },
        {
          nome: 'Tebutrios',
          img: null,
          cpf: '123456',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento',
        },
      ],
    },
    {
      id: 6,
      nomeEntidade: 'ONG 1',
      nomeVaga: 'Contador de História 6',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos: null,
      auxilio: '100',
      auxilioTransporte: true,
      auxilioAlimentacao: false,
      endereco: 'Rua tal dos omi lá',
      bairro: 'Cajuru',
      numero: '23',
      cidade: 'Curitiba',
      estado: 'Paraná',
      complemento: 'Prédio Comercial',
      dataAberturaVaga: '28/01/2023 08:00:00',
      dataFinalizacaoVaga: '20/02/2023 23:00:00',
      dia: '28/01/2023',
      horarioInicio: '13:00',
      horarioEncerramento: '17:00',
      numeroVagas: '3',
      status: 'Cancelada',
      inscritos: [
        {
          nome: 'Jeronimo',
          img: null,
          cpf: '123',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento',
        },
        {
          nome: 'Alienigena',
          img: null,
          cpf: '1234',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento',
        },
        {
          nome: 'Alex',
          img: null,
          cpf: '12345',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento',
        },
        {
          nome: 'Tebutrios',
          img: null,
          cpf: '123456',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento',
        },
      ],
    },
    {
      id: 7,
      nomeEntidade: 'ONG 1',
      nomeVaga: 'Contador de História 7',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos: null,
      auxilio: '100',
      auxilioTransporte: true,
      auxilioAlimentacao: false,
      endereco: 'Rua tal dos omi lá',
      bairro: 'Cajuru',
      numero: '23',
      cidade: 'Curitiba',
      estado: 'Paraná',
      complemento: 'Prédio Comercial',
      dataAberturaVaga: '28/01/2023 08:00:00',
      dataFinalizacaoVaga: '20/02/2023 23:00:00',
      dia: '28/01/2023',
      horarioInicio: '13:00',
      horarioEncerramento: '17:00',
      numeroVagas: '3',
      status: 'Aberta',
      inscritos: [
        {
          nome: 'Jeronimo',
          img: null,
          cpf: '123',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento',
        },
        {
          nome: 'Alienigena',
          img: null,
          cpf: '1234',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento',
        },
        {
          nome: 'Alex',
          img: null,
          cpf: '12345',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento',
        },
        {
          nome: 'Tebutrios',
          img: null,
          cpf: '123456',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento',
        },
      ],
    },
  ];

  constructor(
    public dialog: MatDialog,
    private dataService: DataService,
    private router: Router
  ) {}

  //Variaveis para a paginação
  paginaAtual = 1;
  tamanhoPagina: number = this.vagasDisponiveis.length;
  itemsPerPage = 6;
  public vagas: any = this.vagasDisponiveis.slice(0, 6);

  public mudancaPagina(pageNum: number): void {
    this.tamanhoPagina = this.itemsPerPage * (pageNum - 1);
    this.vagas = this.vagasDisponiveis.slice(
      this.tamanhoPagina,
      this.tamanhoPagina + 6
    );
  }

  getStatus(status: string) {
    if (status == 'Aprovação') {
      return 'bg-warning';
    } else if (status == 'Aberta') {
      return 'bg-success text-white';
    } else if (status == 'Cancelada') {
      return 'bg-danger text-white';
    } else if (status == 'Andamento') {
      return 'bg-info text-white';
    } else {
      return 'bg-secondary text-white';
    }
  }

  //Vai exibir os detalhes da vaga antes de ele efetivar a inscrição
  exibirDetalhes(value: any): void {
    this.dataService.data = value;
    // const dialogRef = this.dialog.open(DetalheVagaEntidadeComponent, {
    //   width: "auto",
    //   data: this.vagasDisponiveis[value],
    // });

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log("The dialog was closed");
    // });
    this.router.navigate(['/Entidade/detalhe-vaga']);
  }

  ngOnInit(): void {}
}

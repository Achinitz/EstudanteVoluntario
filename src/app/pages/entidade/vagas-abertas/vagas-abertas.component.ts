import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-vagas-abertas',
  templateUrl: './vagas-abertas.component.html',
  styleUrls: ['./vagas-abertas.component.scss']
})
export class VagasAbertasComponent implements OnInit {

  public formData = new FormGroup({
    filtro: new FormControl(null, Validators.required),
  });

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
      logradouro: 'Rua tal dos omi lá',
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
      inscricoes: [
        {
          id: 1,
          nome: 'Jeronimo',
          img: null,
          cpf: '123',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Inscrito',
        },
        {
          id: 2,
          nome: 'Alienigena',
          img: null,
          cpf: '1234',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Reprovado',
        },
        {
          id: 3,
          nome: 'Alex',
          img: null,
          cpf: '12345',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Aprovado',
        },
        {
          id: 4,
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
      requisitos: 'Sem requisitos',
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
      inscricoes: [
        {
          id: 5,
          nome: 'Jeronimo',
          img: null,
          cpf: '123',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Inscrito',
        },
        {
          id: 6,
          nome: 'Alienigena',
          img: null,
          cpf: '1234',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Aprovado',
        },
        {
          id: 7,
          nome: 'Alex',
          img: null,
          cpf: '12345',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Aprovado',
        },
        {
          id: 8,
          nome: 'Tebutrios',
          img: null,
          cpf: '123456',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Reprovado',
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
      inscricoes: [
        {
          id: 9,
          nome: 'Jeronimo',
          img: null,
          cpf: '123',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento',
        },
        {
          id: 10,
          nome: 'Alienigena',
          img: null,
          cpf: '1234',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Avaliado',
        },
        {
          id: 11,
          nome: 'Alex',
          img: null,
          cpf: '12345',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Avaliado',
        },
        {
          id: 12,
          nome: 'Tebutrios',
          img: null,
          cpf: '123456',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Reprovado',
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
      inscricoes: [
        {
          id: 13,
          nome: 'Jeronimo',
          img: null,
          cpf: '123',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Cancelado',
        },
        {
          id: 14,
          nome: 'Alienigena',
          img: null,
          cpf: '1234',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Cancelado',
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
      inscricoes: [
        {
          id: 15,
          nome: 'Jeronimo',
          img: null,
          cpf: '123',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento',
        },
        {
          id: 16,
          nome: 'Alienigena',
          img: null,
          cpf: '1234',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento',
        },
        {
          id: 17,
          nome: 'Alex',
          img: null,
          cpf: '12345',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento',
        },
        {
          id: 18,
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

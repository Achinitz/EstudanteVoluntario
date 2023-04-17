import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { DetalheVagaEntidadeComponent } from '../home/detalhe-vaga-entidade/detalhe-vaga-entidade.component';

@Component({
  selector: "app-vagas",
  templateUrl: "./vagas.component.html",
  styleUrls: ["./vagas.component.scss"],
})
export class VagasComponent implements OnInit {

  vagasDisponiveis: any = [
    {
      id: 3,
      nomeEntidade: 'ONG 1',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos: [
        {descricao: 'Ter 5 pós graduação'},
        {descricao: 'Algum ai'},
        {descricao: 'Algum ai'},
      ],
      auxilio:'100',
      auxilioTransporte: true,
      auxilioAlimentacao: false,
      endereco:'Rua tal dos omi lá',
      bairro: 'Cajuru',
      numero: '23',
      cidade: 'Curitiba',
      estado: 'Paraná',
      complemento: 'Prédio Comercial',
      dataAberturaVaga: '28/01/2023 08:00:00',
      dataFinalizacaoVaga: '20/02/2023 23:00:00',
      dia:'28/01/2023',
      horarioInicio:'13:00',
      horarioEncerramento:'17:00',
      numeroVagas:'3',
      status: 'Aberto',
      inscritos: [
        {
          nome: 'Jeronimo',
          img: null,
          cpf: '123',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento'
        },
        {
          nome: 'Alienigena',
          img: null,
          cpf: '1234',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento'
        },
        {
          nome: 'Alex',
          img: null,
          cpf: '12345',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento'
        },
        {
          nome: 'Tebutrios',
          img: null,
          cpf: '123456',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento'
        }
      ],
    },
    {
      id: 3,
      nomeEntidade: 'ONG 1',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos: [
        {descricao: 'Ter 5 pós graduação'},
        {descricao: 'Algum ai'},
        {descricao: 'Algum ai'},
      ],
      auxilio:'100',
      auxilioTransporte: true,
      auxilioAlimentacao: false,
      endereco:'Rua tal dos omi lá',
      bairro: 'Cajuru',
      numero: '23',
      cidade: 'Curitiba',
      estado: 'Paraná',
      complemento: 'Prédio Comercial',
      dataAberturaVaga: '28/01/2023 08:00:00',
      dataFinalizacaoVaga: '20/02/2023 23:00:00',
      dia:'28/01/2023',
      horarioInicio:'13:00',
      horarioEncerramento:'17:00',
      numeroVagas:'3',
      status: 'Aberto',
      inscritos: [
        {
          nome: 'Jeronimo',
          img: null,
          cpf: '123',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento'
        },
        {
          nome: 'Alienigena',
          img: null,
          cpf: '1234',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento'
        },
        {
          nome: 'Alex',
          img: null,
          cpf: '12345',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'reprovado'
        },
        {
          nome: 'Tebutrios',
          img: null,
          cpf: '123456',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'reprovado'
        }
      ],
    },
    {
      id: 3,
      nomeEntidade: 'ONG 1',
      nomeVaga: 'Contador de História',
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
      dataAberturaVaga: '28/01/2023 08:00:00',
      dataFinalizacaoVaga: '20/02/2023 23:00:00',
      dia:'28/01/2023',
      horarioInicio:'13:00',
      horarioEncerramento:'17:00',
      numeroVagas:'3',
      status: 'Aberto',
      inscritos: [
        {
          nome: 'Jeronimo',
          img: null,
          cpf: '123',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento'
        },
        {
          nome: 'Alienigena',
          img: null,
          cpf: '1234',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento'
        },
        {
          nome: 'Alex',
          img: null,
          cpf: '12345',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento'
        },
        {
          nome: 'Tebutrios',
          img: null,
          cpf: '123456',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento'
        }
      ],
    },
    {
      id: 3,
      nomeEntidade: 'ONG 1',
      nomeVaga: 'Contador de História',
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
      dataAberturaVaga: '28/01/2023 08:00:00',
      dataFinalizacaoVaga: '20/02/2023 23:00:00',
      dia:'28/01/2023',
      horarioInicio:'13:00',
      horarioEncerramento:'17:00',
      numeroVagas:'3',
      status: 'Aberto',
      inscritos: [
        {
          nome: 'Jeronimo',
          img: null,
          cpf: '123',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento'
        },
        {
          nome: 'Alienigena',
          img: null,
          cpf: '1234',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento'
        },
        {
          nome: 'Alex',
          img: null,
          cpf: '12345',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento'
        },
        {
          nome: 'Tebutrios',
          img: null,
          cpf: '123456',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento'
        }
      ],
    },
    {
      id: 3,
      nomeEntidade: 'ONG 1',
      nomeVaga: 'Contador de História',
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
      dataAberturaVaga: '28/01/2023 08:00:00',
      dataFinalizacaoVaga: '20/02/2023 23:00:00',
      dia:'28/01/2023',
      horarioInicio:'13:00',
      horarioEncerramento:'17:00',
      numeroVagas:'3',
      status: 'Aberto',
      inscritos: [
        {
          nome: 'Jeronimo',
          img: null,
          cpf: '123',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento'
        },
        {
          nome: 'Alienigena',
          img: null,
          cpf: '1234',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento'
        },
        {
          nome: 'Alex',
          img: null,
          cpf: '12345',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento'
        },
        {
          nome: 'Tebutrios',
          img: null,
          cpf: '123456',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento'
        }
      ],
    },
    {
      id: 3,
      nomeEntidade: 'ONG 1',
      nomeVaga: 'Contador de História',
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
      dataAberturaVaga: '28/01/2023 08:00:00',
      dataFinalizacaoVaga: '20/02/2023 23:00:00',
      dia:'28/01/2023',
      horarioInicio:'13:00',
      horarioEncerramento:'17:00',
      numeroVagas:'3',
      status: 'Aberto',
      inscritos: [
        {
          nome: 'Jeronimo',
          img: null,
          cpf: '123',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento'
        },
        {
          nome: 'Alienigena',
          img: null,
          cpf: '1234',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento'
        },
        {
          nome: 'Alex',
          img: null,
          cpf: '12345',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento'
        },
        {
          nome: 'Tebutrios',
          img: null,
          cpf: '123456',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento'
        }
      ],
    },
    {
      id: 3,
      nomeEntidade: 'ONG 1',
      nomeVaga: 'Contador de História',
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
      dataAberturaVaga: '28/01/2023 08:00:00',
      dataFinalizacaoVaga: '20/02/2023 23:00:00',
      dia:'28/01/2023',
      horarioInicio:'13:00',
      horarioEncerramento:'17:00',
      numeroVagas:'3',
      status: 'Aberto',
      inscritos: [
        {
          nome: 'Jeronimo',
          img: null,
          cpf: '123',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento'
        },
        {
          nome: 'Alienigena',
          img: null,
          cpf: '1234',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento'
        },
        {
          nome: 'Alex',
          img: null,
          cpf: '12345',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento'
        },
        {
          nome: 'Tebutrios',
          img: null,
          cpf: '123456',
          curso: 'Analise de Sistemas',
          idade: 22,
          dataInscricao: '15/05/2022',
          status: 'Andamento'
        }
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

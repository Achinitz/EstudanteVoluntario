import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import { ValidarEstudanteModalComponent } from './validar-estudante-modal/validar-estudante-modal.component';

@Component({
  selector: 'app-validar-estudantes-administrador',
  templateUrl: './validar-estudantes-administrador.component.html',
  styleUrls: ['./validar-estudantes-administrador.component.scss']
})
export class ValidarEstudantesAdministradorComponent implements OnInit {

  constructor(
    private modalService: NgbModal, public dialog: MatDialog,
    private router: Router, private data: DataService)
    {
    }


  //teste
  listaOrdenacao: any = [
    {id: 1, nome: 'Mais antigos'},
    {id: 2, nome: 'Mais recentes'}
  ]

  vagasDisponiveis: any = [
    {
      id: 1,
      nome: 'Gustavo',
      sobrenome: 'de Oliveira Achinitz',
      cpf: '10722781970',
      rg: '7029275',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricaoPessoal: 'Sou uma Pessoa que gosta muito de ajudar o próximo',
      competencias: [
        {descricao: 'Pró Ativo'},
        {descricao: 'Atencioso'},
        {descricao: 'Compreensivo'},
      ],
      status: 'Aberto',
      cidade: 'Curitiba',
      estado: 'PR',
      numero: 41,
      rua: 'Rua Amador Bueno',
      bairro: 'Cajuru',
      cep: '82960-020',
      documentos: [
        {id: 1, nome: 'Comprovante de Matricula', urlDocumento: 'url'},
        {id: 2, nome: 'Certificado de Torneiro Mecânico', urlDocumento: 'url'},
        {id: 3, nome: 'Ser Articulado', urlDocumento: 'url'},
        {id: 4, nome: 'Incorporar Personagens', urlDocumento: 'url'},
      ],
      cursos: [
        {id: 1, nome: 'Analise e Desenvolvimento de Sistemas', instituicao: 'UFPR', situacao: 'Completo'},
        {id: 2, nome: 'Técnico em Fabricação Mecânica', instituicao: 'IFSC', situacao: 'Completo'},
        {id: 3, nome: 'Mecânica Industrial', instituicao: 'SENAI', situacao: 'Completo'},
        {id: 4, nome: 'Torneiro Mecânico', instituicao: 'SENAI', situacao: 'Completo'},
        {id: 4, nome: 'Oratória', instituicao: 'FAE', situacao: 'Completo'},
      ], 
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



  redirecionarDetalhes(value: any){
    this.data.data = value;
    this.router.navigate(['/Administrador/detalhe-vaga']);
  }

  ordenarLista(){
    console.log('Lista Ordenada')
  }

  //nao teste


  estudantes: any = [
    {
      cpf: 1,
      nome: 'Josué',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
    },
    {
      cpf: 2,
      nome: 'Gustavo',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
    },
    {
      cpf: 3,
      nome: 'Amanda',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
    },
    {
      cpf: 4,
      nome: 'Antonio',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
    },
    {
      cpf: 5,
      nome: 'Paula Fernandes',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
    },
    {
      cpf: 6,
      nome: 'Sandy',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
    },
    {
      cpf: 7,
      nome: 'Junior',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
    },
    {
      cpf: 8,
      nome: 'Avril',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
    },
    {
      cpf: 9,
      nome: 'Jhon',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
    },
    {
      cpf: 10,
      nome: 'Alcione',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
    },
    {
      cpf: 11,
      nome: 'Betina',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
    },
  ];
  filter: any;
  public filterEstudante: any = this.estudantes.slice(0,6);

  public mudancaPagina(pageNum: number): void {
    this.tamanhoPagina = this.itemsPerPage*(pageNum - 1);
    this.filterEstudante = this.estudantes.slice(this.tamanhoPagina, this.tamanhoPagina + 6)
  }

  search(){
    if(this.filter == ""){
      this.filterEstudante = this.estudantes.slice(0,6);
    }else{
      this.filterEstudante = this.estudantes.filter(
        (res:any) => {
          return res.filter.toUpperCase();
        }
      )
    }
  }

  // filtrar(palavraChave: any) {

  //   if (palavraChave) {
  //     palavraChave = palavraChave.toUpperCase();

  //     this.filterEstudante = this.estudantes.filter((a: any) =>
  //           a.nome.toUpperCase().indexOf(palavraChave) >= 0
  //       );
  //   }
  // }

  exibirDetalhes(){
   this.modalService.open(ValidarEstudanteModalComponent, { windowClass: 'width:90%; heigth: 50%;', backdrop: 'static', keyboard: false, centered: true });
  }


  ngOnInit(): void {
  }

}

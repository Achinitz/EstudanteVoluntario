import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import { ValidarEntidadeModalComponent } from './validar-entidade-modal/validar-entidade-modal.component';

@Component({
  selector: 'app-validar-entidades-administrador',
  templateUrl: './validar-entidades-administrador.component.html',
  styleUrls: ['./validar-entidades-administrador.component.scss']
})
export class ValidarEntidadesAdministradorComponent implements OnInit {

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

  entidadesDisponiveis: any = [
    {
      id: 1,
      nomeFantasia: 'Estudante Voluntário',
      razaoSocial: 'Valida ai Estudante',
      cnpj: '75054940000162',
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      email: 'firma@email.com',
      telefone: '41996683953',
      missao: 'Somos uma familia que blá blá blá',
      valores: [
        {descricao: 'Escuta Ativa'},
        {descricao: 'Colaboração'},
        {descricao: 'Acolhimento'},
      ],
      conquistas: [
        {id: 1, nome: 'Great Place to Work', instituicao: 'UFPR', situacao: 'Completo'},
        {id: 2, nome: 'Técnico em Fabricação Mecânica', instituicao: 'IFSC', situacao: 'Completo'},
      ], 
      status: 'Aberto',
      cidade: 'Curitiba',
      estado: 'PR',
      numero: 41,
      rua: 'Rua Amador Bueno',
      bairro: 'Cajuru',
      cep: '82960-020',
    },  
  ];

  paginaAtual = 1;
  tamanhoPagina: number = this.entidadesDisponiveis.length;
  itemsPerPage = 6;
  tipoOrdenacao: any;
  public vagas: any = this.entidadesDisponiveis.slice(0,6);



  redirecionarDetalhes(value: any){
    this.data.data = value;
    this.router.navigate(['/Administrador/validar-entidade']);
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


  exibirDetalhes(){
   this.modalService.open(ValidarEntidadeModalComponent, { windowClass: 'width:90%; heigth: 50%;', backdrop: 'static', keyboard: false, centered: true });
  }


  ngOnInit(): void {
  }

}

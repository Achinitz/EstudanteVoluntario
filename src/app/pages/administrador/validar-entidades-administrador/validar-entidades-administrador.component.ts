import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ValidarEntidadeModalComponent } from './validar-entidade-modal/validar-entidade-modal.component';

@Component({
  selector: 'app-validar-entidades-administrador',
  templateUrl: './validar-entidades-administrador.component.html',
  styleUrls: ['./validar-entidades-administrador.component.scss']
})
export class ValidarEntidadesAdministradorComponent implements OnInit {



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

  paginaAtual = 1;
  tamanhoPagina: number = this.estudantes.length;
  itemsPerPage = 6;
  filter: any;
  public filterEstudante: any = this.estudantes.slice(0,6);

  constructor(private modalService: NgbModal, public dialog: MatDialog) { }

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

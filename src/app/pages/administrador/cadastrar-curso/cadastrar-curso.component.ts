import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetalhesCursoComponent } from './detalhes-curso/detalhes-curso.component';

@Component({
  selector: 'app-cadastrar-curso',
  templateUrl: './cadastrar-curso.component.html',
  styleUrls: ['./cadastrar-curso.component.scss'],
})
export class CadastrarCursoComponent implements OnInit {
  endereco: any=[];

  cursos: any = [
    {
      id: 1,
      nome: 'ADMINISTRAÇÃO',
      grauAcademico: 'Bacharelado',
      instituicao: 'UFPR',
      campus: 'CAMPUS JARDIM BOTÂNICO',
      endereco: [
        {logradouro: 'Rua Prefeito Lothário Meissner'},
        {numero: 632},
        {bairro: 'Jardim Botânico'},
        {cidade: 'Curitiba'},
        {uf: 'PR'}
      ],
    },
    {
      id: 2,
      nome: 'ADMINISTRAÇÃO PÚBLICA',
      grauAcademico: 'Bacharelado',
      instituicao: 'UFPR',
      campus: 'CAMPUS LITORAL',
      cidade: 'Matinhos',
      uf: 'PR',
    },

    {
      id: 3,
      nome: 'AGROECOLOGIA',
      grauAcademico: 'Tecnológico',
      instituicao: 'UFPR',
      campus: 'CAMPUS LITORAL',
      cidade: 'Matinhos',
      uf: 'PR',
    },

    {
      id: 4,
      nome: 'AGRONOMIA',
      grauAcademico: 'Bacharelado',
      instituicao: 'UFPR',
      campus: 'CAMPUS AGRÁRIAS',
      cidade: 'Curitiba',
      uf: 'PR',
    },

    {
      id: 5,
      nome: 'AGRONOMIA',
      grauAcademico: 'Bacharelado',
      instituicao: 'UFPR',
      campus: 'CAMPUS AGRÁRIAS',
      cidade: 'Curitiba',
      uf: 'PR',
    },
    {
      id: 6,
      nome: 'AGRONOMIA',
      grauAcademico: 'Bacharelado',
      instituicao: 'UFPR',
      campus: 'CAMPUS PALOTINA',
      cidade: 'Palotina',
      uf: 'PR',
    },
    {
      id: 7,
      nome: 'ANÁLISE E DESENVOLVIMENTO DE SISTEMAS',
      grauAcademico: 'Tecnológico',
      instituicao: 'UFPR',
      campus: 'CAMPUS CENTRO POLITÉCNICO',
      cidade: 'Curitiba',
      uf: 'PR',
    },
    {
      id: 8,
      nome: 'ARQUITETURA E URBANISMO',
      grauAcademico: 'Bacharelado',
      instituicao: 'UFPR',
      campus: 'CAMPUS CENTRO POLITÉCNICO',
      cidade: 'Curitiba',
      uf: 'PR',
    },
  ];

  constructor(
    private modalService: NgbModal,
  ) {}

  paginaAtual = 1;
  tamanhoPagina: number = this.cursos.length;
  itemsPerPage = 6;
  tipoOrdenacao: any;
  public ies: any = this.cursos.slice(0, 6);

  public mudancaPagina(pageNum: number): void {
    this.tamanhoPagina = this.itemsPerPage * (pageNum - 1);
    this.ies = this.cursos.slice(
      this.tamanhoPagina,
      this.tamanhoPagina + 6
    );
  }

  visualizarCurso(Curso: any) {
      const modalRef = this.modalService.open(DetalhesCursoComponent, {
      windowClass: 'auto',
      backdrop: 'static',
      centered: true,
    });
    modalRef.componentInstance.cursoSelecionado = Curso;
  }

  ngOnInit(): void {}
}

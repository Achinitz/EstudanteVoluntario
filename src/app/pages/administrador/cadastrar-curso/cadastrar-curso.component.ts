import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalCursoComponent } from './modal-curso/modal-curso.component';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-curso',
  templateUrl: './cadastrar-curso.component.html',
  styleUrls: ['./cadastrar-curso.component.scss'],
})
export class CadastrarCursoComponent implements OnInit {
  curso: any;

  cursos: any = [
    {
      id: 1,
      nome: 'ADMINISTRAÇÃO',
      grauAcademico: 'Bacharelado',
      instituicaoSigla: 'UFPR',
      instituicaoNome: 'Universidade Federal do Paraná',
      campus: 'CAMPUS JARDIM BOTÂNICO',
      logradouro: 'Rua Prefeito Lothário Meissner',
      numero: 632,
      bairro: 'Jardim Botânico',
      cidade: 'Curitiba',
      uf: 'PR',
    },
    {
      id: 2,
      nome: 'ADMINISTRAÇÃO PÚBLICA',
      grauAcademico: 'Bacharelado',
      instituicaoSigla: 'UFPR',
      instituicaoNome: 'Universidade Federal do Paraná',
      campus: 'CAMPUS LITORAL',
      logradouro: 'Rua Jaguariaíva',
      numero: 512,
      complemento: '',
      bairro: 'Caiobá',
      cidade: 'Matinhos',
      uf: 'PR',
    },
    {
      id: 3,
      nome: 'AGROECOLOGIA',
      grauAcademico: 'Tecnológico',
      instituicaoSigla: 'UFPR',
      instituicaoNome: 'Universidade Federal do Paraná',
      campus: 'CAMPUS LITORAL',
      logradouro: 'Rua Jaguariaíva',
      numero: 512,
      complemento: '',
      bairro: 'Caiobá',
      cidade: 'Matinhos',
      uf: 'PR',
    },
    {
      id: 5,
      nome: 'AGRONOMIA',
      grauAcademico: 'Bacharelado',
      instituicaoSigla: 'UFPR',
      instituicaoNome: 'Universidade Federal do Paraná',
      campus: 'CAMPUS AGRÁRIAS',
      logradouro: 'RUA DOS FUNCIONÁRIOS',
      numero: 1540,
      complemento: '',
      bairro: 'JUVEVÊ',
      cidade: 'Curitiba',
      uf: 'PR',
    },
    {
      id: 6,
      nome: 'AGRONOMIA',
      grauAcademico: 'Bacharelado',
      instituicaoSigla: 'UFPR',
      instituicaoNome: 'Universidade Federal do Paraná',
      campus: 'CAMPUS PALOTINA',
      logradouro: 'Rua Pioneiro',
      numero: 2153,
      complemento: '',
      bairro: 'Jardim Dallas',
      cidade: 'Palotina',
      uf: 'PR',
    },
    {
      id: 7,
      nome: 'ANÁLISE E DESENVOLVIMENTO DE SISTEMAS',
      grauAcademico: 'Tecnológico',
      instituicaoSigla: 'UFPR',
      instituicaoNome: 'Universidade Federal do Paraná',
      campus: 'CAMPUS CENTRO POLITÉCNICO',
      logradouro: 'Avenida Coronel Francisco Heráclito dos Santos',
      numero: 210,
      complemento: 'CAMPUS CENTRO POLITÉCNICO',
      bairro: 'Jardim das Américas',
      cidade: 'Curitiba',
      uf: 'PR',
    },
    {
      id: 8,
      nome: 'ARQUITETURA E URBANISMO',
      grauAcademico: 'Bacharelado',
      instituicaoSigla: 'UFPR',
      instituicaoNome: 'Universidade Federal do Paraná',
      campus: 'CAMPUS CENTRO POLITÉCNICO',
      logradouro: 'Avenida Coronel Francisco Heráclito dos Santos',
      numero: 210,
      complemento: 'CAMPUS CENTRO POLITÉCNICO',
      bairro: 'Jardim das Américas',
      cidade: 'Curitiba',
      uf: 'PR',
    },
  ];

  constructor(private modalService: NgbModal, private router: Router) {}

  paginaAtual = 1;
  tamanhoPagina: number = this.cursos.length;
  itemsPerPage = 6;
  tipoOrdenacao: any;
  public ies: any = this.cursos.slice(0, 6);

  public mudancaPagina(pageNum: number): void {
    this.tamanhoPagina = this.itemsPerPage * (pageNum - 1);
    this.ies = this.cursos.slice(this.tamanhoPagina, this.tamanhoPagina + 6);
  }

  visualizarCurso(Curso: any) {
    const modalRef = this.modalService.open(ModalCursoComponent, {
      windowClass: 'auto',
      backdrop: 'static',
      centered: true,
    });
    modalRef.componentInstance.cursoSelecionado = Curso;
  }

  editarCurso(curso:any){
    this.router.navigate(['/Admin/editar-curso']);
  }

  excluirCurso(Curso: any) {   
    Swal.fire({
      title: `Deseja realmente excluir o curso ${Curso.nome}?`,
      text: 'Ao confirmar, o curso será excluído da base de dados',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `Curso ${Curso.nome} excluído com sucesso!`,
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }


  ngOnInit(): void {}
}

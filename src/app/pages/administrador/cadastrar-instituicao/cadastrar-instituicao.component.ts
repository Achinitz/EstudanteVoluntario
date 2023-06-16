import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-instituicao',
  templateUrl: './cadastrar-instituicao.component.html',
  styleUrls: ['./cadastrar-instituicao.component.scss'],
})
export class CadastrarInstituicaoComponent implements OnInit {
  instituicoes: any = [
    {
      id: 1,
      cnpj: 75054940000162,
      sigla: 'UFPR',
      nome: 'Universidade Federal do Paraná',
      uf: 'Paraná',
      cep: '82960-020',
      logradouro: 'Casa',
      numero: '1133',
      bairro: 'Cajuru',
      complemento: 'Casa Amarela',
      estado: 1,
      cidade: 2,
      cursos: [
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
      ],
    },
    {
      id: 2,
      cnpj: 75054940000162,
      sigla: 'UTFPR',
      nome: 'Universidade Tecnológica Federal do Paraná',
      uf: 'Paraná',
      cep: '82960-020',
      logradouro: 'Casa',
      numero: '1133',
      bairro: 'Cajuru',
      complemento: 'Casa Amarela',
      estado: 1,
      cidade: 2,
    },
    {
      id: 3,
      cnpj: 75054940000162,
      sigla: 'PUCPR',
      nome: 'Pontifícia Universidade Católica do Paraná',
      uf: 'Paraná',
      cep: '82960-020',
      logradouro: 'Casa',
      numero: '1133',
      bairro: 'Cajuru',
      complemento: 'Casa Amarela',
      estado: 1,
      cidade: 2,
    },
    {
      id: 4,
      cnpj: 75054940000162,
      sigla: 'UNESPAR',
      nome: 'Universidade Estadual do Paraná',
      uf: 'Paraná',
      cep: '82960-020',
      logradouro: 'Casa',
      numero: '1133',
      bairro: 'Cajuru',
      complemento: 'Casa Amarela',
      estado: 1,
      cidade: 2,
    },
    {
      id: 5,
      cnpj: 75054940000162,
      sigla: 'UNILA',
      nome: 'Universidade Federal da Integração Latino-América',
      uf: 'Paraná',
      cep: '82960-020',
      logradouro: 'Casa',
      numero: '1133',
      bairro: 'Cajuru',
      complemento: 'Casa Amarela',
      estado: 1,
      cidade: 2,
    },
    {
      id: 6,
      cnpj: 75054940000162,
      sigla: 'UEPG',
      nome: 'Universidade Estadual de Ponta Grossa',
      uf: 'Paraná',
      cep: '82960-020',
      logradouro: 'Casa',
      numero: '1133',
      bairro: 'Cajuru',
      complemento: 'Casa Amarela',
      estado: 1,
      cidade: 2,
    },
    {
      id: 7,
      cnpj: 75054940000162,
      sigla: 'UEPG',
      nome: 'Universidade Estadual de Ponta Grossa',
      uf: 'Paraná',
      cep: '82960-020',
      logradouro: 'Casa',
      numero: '1133',
      bairro: 'Cajuru',
      complemento: 'Casa Amarela',
      estado: 1,
      cidade: 2,
    },
  ];

  constructor(
    private modalService: NgbModal,
    private dataService: DataService,
    private router: Router
  ) {}

  paginaAtual = 1;
  tamanhoPagina: number = this.instituicoes.length;
  itemsPerPage = 6;
  tipoOrdenacao: any;
  public ies: any = this.instituicoes.slice(0, 6);

  public mudancaPagina(pageNum: number): void {
    this.tamanhoPagina = this.itemsPerPage * (pageNum - 1);
    this.ies = this.instituicoes.slice(
      this.tamanhoPagina,
      this.tamanhoPagina + 6
    );
  }

  visualizarInstituicao(Instituicao: any) {
    this.dataService.data = Instituicao;
    this.router.navigate(['/Administrador/detalhe-instituicao']);
  }

  editarInstituicao(Instituicao: any){
    this.dataService.data = Instituicao;
    this.router.navigate(['/Administrador/editar-instituicao']);
  }

  excluirInstituicao(Instituicao: any) {
    Swal.fire({
      title: `Deseja realmente excluir a instituição ${Instituicao.nome}?`,
      text: 'Ao confirmar, a instituição será excluída da base de dados',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `Instituição ${Instituicao.nome} excluída com sucesso!`,
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';
import { InstituicaoService } from 'src/app/services/instituicao.service';
import { Instituicao } from 'src/app/models/instituicao';

@Component({
  selector: 'app-cadastrar-instituicao',
  templateUrl: './cadastrar-instituicao.component.html',
  styleUrls: ['./cadastrar-instituicao.component.scss'],
})
export class CadastrarInstituicaoComponent implements OnInit {
  instituicoes: Instituicao[] = [];

  constructor(
    private dataService: DataService,
    private router: Router,
    private instituicaoService: InstituicaoService
  ) {}

  ngOnInit(): void {
    this.getIes();
  }

  getIes() {
    this.instituicaoService.listarIes().subscribe({
      next: (res: any) => {
        this.instituicoes = res.instituicoes;
      },
    });
  }

  visualizarInstituicao(value: Instituicao): void {
    this.router.navigate([
      '/Administrador/detalhe-instituicao',
      { id: value._id },
    ]);
  }

  excluirInstituicao(instituicao: Instituicao) {
    Swal.fire({
      title: `Deseja realmente excluir a instituição ${instituicao.nome}?`,
      text: 'Ao confirmar, a instituição será excluída da base de dados',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.instituicaoService.excluirInstituicao(instituicao._id).subscribe({
          next: (res: any) => {
            Swal.fire({
              title: res.message,
              icon: 'success',
              showConfirmButton: false,
              timer: 1500,
            }).finally(() => window.location.reload());
            this.router.navigate(['/Administrador/cadastrar-instituicao']);
          }
        })
        
      }
    });
  }
  
  editarInstituicao(Instituicao: any) {
    this.dataService.data = Instituicao;
    this.router.navigate(['/Administrador/editar-instituicao']);
  }

  

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
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Instituicao } from 'src/app/models/instituicao';
import { CursoService } from 'src/app/services/curso.service';
import { InstituicaoService } from 'src/app/services/instituicao.service';
import { Curso } from 'src/app/models/curso';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detalhes-instituicao',
  templateUrl: './detalhes-instituicao.component.html',
  styleUrls: ['./detalhes-instituicao.component.scss'],
})
export class DetalhesInstituicaoComponent implements OnInit {
  id: any;
  instituicao: Instituicao;
  cursos: Curso[] = [];

  constructor(
    private route: ActivatedRoute,
    private cursoService: CursoService,
    private instituicaoService: InstituicaoService,
    private toast: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getDetalhesInstituicao();
  }

  getDetalhesInstituicao() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.instituicaoService.visualizarInstituicao(this.id).subscribe({
      next: (res: any) => {
        this.instituicao = res.instituicao;   
        this.cursoService.listarCursos(this.id).subscribe({
          next: (res: any) => {
            this.cursos = res;
          },
          error: (err: any) => {
            this.toast.error(err.message);
          },
        });
      },
    });
  }

  adicionarCurso() {
    this.router.navigate([
      '/Administrador/adicionar-curso',
      { id: this.instituicao._id },
    ]);
  }

  excluirCurso(curso: Curso) {
    Swal.fire({
      title: `Deseja realmente excluir o curso ${curso.nomeCurso}?`,
      text: 'Ao confirmar, o curso será excluído da base de dados',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.cursoService.excluirCurso(curso._id).subscribe({
          next: (res: any) => {
            Swal.fire({
              title: `Curso ${curso.nomeCurso} excluído com sucesso!`,
              icon: 'success',
              showConfirmButton: false,
              timer: 1500,
            }).finally(() => window.location.reload());
          },
        });
      }
    });
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
            });
            this.router.navigate(['/Administrador/cadastrar-instituicao']);
          }
        })
        
      }
    });
  }
}

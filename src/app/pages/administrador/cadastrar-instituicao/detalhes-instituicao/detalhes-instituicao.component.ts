import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';
import { ModalCursoComponent } from '../../cadastrar-curso/modal-curso/modal-curso.component';
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
  modalReference: any;

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private cursoService: CursoService,
    private instituicaoService: InstituicaoService,
    private toast: ToastrService
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

  visualizarCurso(Curso: any) {
    const modalRef = this.modalService.open(ModalCursoComponent, {
      windowClass: 'auto',
      backdrop: 'static',
      centered: true,
    });
    modalRef.componentInstance.cursoSelecionado = Curso;
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
}

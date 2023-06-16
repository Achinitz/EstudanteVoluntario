import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';
import { ModalCursoComponent } from '../../cadastrar-curso/modal-curso/modal-curso.component';

@Component({
  selector: 'app-detalhes-instituicao',
  templateUrl: './detalhes-instituicao.component.html',
  styleUrls: ['./detalhes-instituicao.component.scss'],
})
export class DetalhesInstituicaoComponent implements OnInit {
  instituicao: any;
  modalReference: any;

  constructor(
    private dataService: DataService,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.instituicao = this.dataService.data;
    if (this.dataService.data.nome == null) {
      this.router.navigate(['/Administrador/cadastrar-instituicao']);
    }
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.dataService.data = this.instituicao;
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

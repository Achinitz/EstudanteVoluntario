import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Estudante } from 'src/app/models/estudante';
import { Usuario } from 'src/app/models/usuario.model';
import { EntidadeService } from 'src/app/services/entidade.service';
import { LoginService } from 'src/app/services/login.service';
import { TermoadesaoService } from 'src/app/services/termoadesao.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalhe-estudante',
  templateUrl: './detalhe-estudante.component.html',
  styleUrls: ['./detalhe-estudante.component.scss'],
})
export class DetalheEstudanteComponent implements OnInit {
  @Input() inscrito: Estudante;
  @Input() statusInscricao: string;
  @Input() inscritoId: string;
  usuarioLogado: Usuario;

  constructor(
    public activeModal: NgbActiveModal,
    private entidadeService: EntidadeService,
    private loginService: LoginService,
    private termoAdesaoService: TermoadesaoService
  ) {}

  ngOnInit(): void {
    this.usuarioLogado = this.loginService.usuarioLogado;
  }

  aprovarCandidato() {
    Swal.fire({
      title: 'Deseja aprovar esse candidato para essa vaga?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        const idUsuario = this.usuarioLogado._id;
        this.entidadeService
          .aprovarInscrito(idUsuario, this.inscritoId)
          .subscribe({
            next: (res: any) => {
              Swal.fire({
                title: res.message,
                icon: 'success',
                showConfirmButton: false,
                timer: 1500,
              });
              this.gerarTermo();
              window.setTimeout(window.location.reload, 2000);
            },
            error: (erro: any) => {
              Swal.fire({
                title: erro.error.message,
                icon: 'error',
                showConfirmButton: false,
                timer: 1500,
              });
              window.setTimeout(window.location.reload, 2000);
            },
          });
      }
    });
  }

  reprovarCandidato() {
    Swal.fire({
      title: 'Deseja reprovar esse candidato para essa vaga?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        const idUsuario = this.usuarioLogado._id;
        this.entidadeService
          .reprovarInscrito(idUsuario, this.inscritoId)
          .subscribe({
            next: (res: any) => {
              Swal.fire({
                title: res.message,
                icon: 'success',
                showConfirmButton: false,
                timer: 1500,
              });
            },
            error: (erro: any) => {
              Swal.fire({
                title: erro.error.message,
                icon: 'error',
                showConfirmButton: false,
                timer: 1500,
              });
            },
          });
      }
    });
  }

  gerarTermo() {
    this.termoAdesaoService
      .gerarTermoAdesao(this.usuarioLogado._id, this.inscritoId)
      .subscribe({
        next(res: any) {
          console.log(res);
        },
      });
  }
}

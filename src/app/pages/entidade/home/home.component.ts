import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario.model';
import { Vaga } from 'src/app/models/vaga';
import { EntidadeService } from 'src/app/services/entidade.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    //Variaveis para a paginação
    paginaAtual = 1;
    itemsPerPage = 5;
    tamanhoArray;
    idUsuario: string;

  usuarioLogado: Usuario;
  vagasAbertas: any = [];
  vagasAndamento: any = [];
  vagasCanceladas: any = [];
  vagasAprovacao: any = [];

  constructor(
    private router: Router,
    private loginService: LoginService,
    private entidadeService: EntidadeService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.usuarioLogado = this.loginService.usuarioLogado;
    this.buscaVagasAbertas(this.usuarioLogado._id);
    this.buscaVagasAprovacao(this.usuarioLogado._id);
    this.buscarVagasAndamento(this.usuarioLogado._id);
    this.buscarVagasCanceladas(this.usuarioLogado._id);
  }

  buscarVagasAndamento(idUsuario: string){
    this.entidadeService.listarVagasAndamento(idUsuario, 10000).subscribe({
      next: (res:any) => {
        this.vagasAndamento = res.vagas;
      },
      error: (err:any) => {
        this.toast.error(err?.message);
      }
    });
  }

  buscarVagasCanceladas(idUsuario: string){
    this.entidadeService.listarVagasCanceladas(idUsuario).subscribe({
      next: (res:any) => {
        this.vagasCanceladas = res.vagas;
      },
      error: (err:any) => {
        this.toast.error(err?.message);
      }
    });
  }

  buscaVagasAbertas(idUsuario: string) {
      this.entidadeService.listarVagasAbertas(idUsuario,10000).subscribe({
        next: (res: any) => {
          this.vagasAbertas = res.vagas;
        },
        error: (err: any) => {
          this.toast.error(err?.message);
        },
      });
  }

  mudancaPagina(){

  }

  buscaVagasAprovacao(idUsuario: string) {

    let page = this.paginaAtual ;

    this.entidadeService.listarVagasAprovacao(idUsuario, page).subscribe({
      next: (res: any) => {
        this.vagasAprovacao = res.vagas;
        this.tamanhoArray = res.total;
      },
      error: (err: any) => {
        this.toast.error(err?.message);
      },
    });
  }

  getStatus(status: string) {
    if (status == 'APROVACAO') {
      return 'bg-warning';
    } else if (status == 'ABERTA') {
      return 'bg-success text-white';
    } else if (status == 'INSCRITO') {
      return 'bg-success text-white';
    } else if (status == 'CANCELADA') {
      return 'bg-danger text-white';
    } else if (status == 'ANDAMENTO') {
      return 'bg-info text-white';
    } else {
      return 'bg-secondary text-white';
    }
  }

  //Vai exibir os detalhes da vaga
  exibirDetalhes(value: Vaga): void {
    this.router.navigate(['/Entidade/detalhe-vaga', { id: value._id }]);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario.model';
import { Vaga } from 'src/app/models/vaga';
import { DataService } from 'src/app/services/data.service';
import { EntidadeService } from 'src/app/services/entidade.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  usuarioLogado: Usuario;
  vagasAbertas: any = [];
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
  }

  buscaVagasAbertas(idUsuario: string) {
    this.entidadeService.listarVagasAbertas(idUsuario).subscribe({
      next: (res: any) => {
        this.vagasAbertas = res;
      },
      error: (err: any) => {
        this.toast.error(err?.message);
      },
    });
  }

  buscaVagasAprovacao(idUsuario: string) {
    this.entidadeService.listarVagasAprovacao(idUsuario).subscribe({
      next: (res: any) => {
        this.vagasAprovacao = res;
      },
      error: (err: any) => {
        this.toast.error(err?.message);
      },
    });
  }

  getStatus(status: string) {
    if (status == 'APROVAÇÃO') {
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

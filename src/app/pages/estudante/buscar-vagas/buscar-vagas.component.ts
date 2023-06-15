import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { Vaga } from 'src/app/models/vaga';
import { EstudanteService } from 'src/app/services/estudante.service';
import { LoginService } from 'src/app/services/login.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-buscar-vagas',
  templateUrl: './buscar-vagas.component.html',
  styleUrls: ['./buscar-vagas.component.scss'],
})
export class BuscarVagasComponent implements OnInit {
  usuarioLogado: Usuario;
  vagasCadastradas: any = [];

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private estudanteService: EstudanteService,    
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.usuarioLogado = this.loginService.usuarioLogado;  
    this.getVagas();
  }

  getVagas() {
    this.estudanteService.listarVagas().subscribe({
      next: (res: Vaga[]) => {
        this.vagasCadastradas = res;
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
    this.router.navigate(['/Estudante/detalhe-vaga', { id: value._id }]);
  }

  //Paginação
  paginaAtual = 1;
  tamanhoPagina: number = this.vagasCadastradas.length;
  itemsPerPage = 6;
  public vagas: any = this.vagasCadastradas.slice(0, 6);

  public mudancaPagina(pageNum: number): void {
    this.tamanhoPagina = this.itemsPerPage * (pageNum - 1);
    this.vagas = this.vagasCadastradas.slice(
      this.tamanhoPagina,
      this.tamanhoPagina + 6
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { Vaga } from 'src/app/models/vaga';
import { AdministradorService } from 'src/app/services/administrador.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-validar-vagas-administrador',
  templateUrl: './validar-vagas-administrador.component.html',
  styleUrls: ['./validar-vagas-administrador.component.scss'],
})
export class ValidarVagasAdministradorComponent implements OnInit {
  vagasAprovacao: any = [];
  usuarioLogado: Usuario;
  tamanhoPagina: number;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private loginService: LoginService,
    private administradorService: AdministradorService
  ) {}

  ngOnInit(): void {
    this.usuarioLogado = this.loginService.usuarioLogado;
    this.getVagas();
  }

  getVagas() {
    this.administradorService.listarVagas().subscribe({
      next: (res: any) => {
        this.vagasAprovacao = res.vagas;
        this.tamanhoPagina = this.vagasAprovacao.length;
      },
    });
  }

  exibirDetalhes(value: Vaga): void {
    this.router.navigate(['/Administrador/detalhe-vaga', { id: value._id }]);
  }
}

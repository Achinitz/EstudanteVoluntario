import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Entidade } from 'src/app/models/entidade';
import { Usuario } from 'src/app/models/usuario.model';
import { AdministradorService } from 'src/app/services/administrador.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-validar-entidades-administrador',
  templateUrl: './validar-entidades-administrador.component.html',
  styleUrls: ['./validar-entidades-administrador.component.scss'],
})
export class ValidarEntidadesAdministradorComponent implements OnInit {
  entidadesAprovacao: any = [];
  tamanhoPagina: number;
  usuarioLogado: Usuario;
 
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private loginService: LoginService,
    private administradorService: AdministradorService
  ) {}

  ngOnInit(): void {
    this.usuarioLogado = this.loginService.usuarioLogado;
    this.getEntidades();
  }

  getEntidades() {
    this.administradorService.listarEntidades().subscribe({
      next: (res: any) => {
        this.entidadesAprovacao = res.entidades;
        this.tamanhoPagina = this.entidadesAprovacao.length;       
      },
    });
  }

  exibirDetalhes(value: Entidade): void {
    this.router.navigate([
      '/Administrador/validar-entidade',
      { id: value._id },
    ]);
  }
}

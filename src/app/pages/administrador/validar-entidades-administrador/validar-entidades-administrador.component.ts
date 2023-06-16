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
  tipoOrdenacao: any;

  listaOrdenacao: any = [
    { id: 1, nome: 'Mais antigos' },
    { id: 2, nome: 'Mais recentes' },
  ];

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

  ordenarLista() {
    console.log('Lista Ordenada');
  }

  /*  paginaAtual = 1;
   itemsPerPage = 6;
  tipoOrdenacao: any;
  public vagas: any = this.entidadesAprovacao.slice(0, 6);

  public mudancaPagina(pageNum: number): void {
    this.tamanhoPagina = this.itemsPerPage*(pageNum - 1);
    this.vagas = this.entidadesAprovacao.slice(this.tamanhoPagina, this.tamanhoPagina + 6)
  } */
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Estudante } from 'src/app/models/estudante';
import { Usuario } from 'src/app/models/usuario.model';
import { AdministradorService } from 'src/app/services/administrador.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-validar-estudantes-administrador',
  templateUrl: './validar-estudantes-administrador.component.html',
  styleUrls: ['./validar-estudantes-administrador.component.scss'],
})
export class ValidarEstudantesAdministradorComponent implements OnInit {
  estudantesAprovacao: any = [];
  usuarioLogado: Usuario;
  tipoOrdenacao: any;
  tamanhoPagina: number;

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
    this.getEstudantes();
  }

  getEstudantes() {
    this.administradorService.listarEstudantes().subscribe({
      next: (res: any) => {
        this.estudantesAprovacao = res.estudantes;
        this.tamanhoPagina = this.estudantesAprovacao.length;
      },
    });
  }

  exibirDetalhes(value: Estudante): void {
    this.router.navigate(['/Admin/validar-estudante', { id: value._id }]);
  }

  ordenarLista() {
    console.log('Lista Ordenada');
  }

  /*  paginaAtual = 1;
  tamanhoPagina: number = this.estudantesAprovacao.length;
  itemsPerPage = 6;
  tipoOrdenacao: any;
  filter: any;
  public filterEstudante: any = this.estudantesAprovacao.slice(0, 6);

  public mudancaPagina(pageNum: number): void {
    this.tamanhoPagina = this.itemsPerPage * (pageNum - 1);
    this.filterEstudante = this.estudantesAprovacao.slice(
      this.tamanhoPagina,
      this.tamanhoPagina + 6
    );
  } */
}

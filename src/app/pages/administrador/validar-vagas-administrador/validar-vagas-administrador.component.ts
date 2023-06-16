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

  ordenarLista() {
    console.log('Lista Ordenada');
  }

  /*  paginaAtual = 1;
  tamanhoPagina: number = this.vagasAprovacao.length;
  itemsPerPage = 6;
 
  public vagas: any = this.vagasAprovacao.slice(0, 6);
 */
  /*  public mudancaPagina(pageNum: number): void {
    this.tamanhoPagina = this.itemsPerPage * (pageNum - 1);
    this.vagas = this.vagasAprovacao.slice(
      this.tamanhoPagina,
      this.tamanhoPagina + 6
    );
  } */
}

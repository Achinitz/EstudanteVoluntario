import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { Vaga } from 'src/app/models/vaga';
import { EstudanteService } from 'src/app/services/estudante.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-buscar-vagas',
  templateUrl: './buscar-vagas.component.html',
  styleUrls: ['./buscar-vagas.component.scss'],
})
export class BuscarVagasComponent implements OnInit {
    //Variaveis para a paginação
    paginaAtual = 1;
    itemsPerPage = 5;
    tamanhoArray;
    idUsuario: string;
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

  filtrarVagas(lista: any){
    lista.map( (a:any) => {
      console.log(a);
    });
  }

  getVagas() {
    this.estudanteService.listarVagas(this.usuarioLogado._id,this.paginaAtual).subscribe({
      next: (res: any) => {
        this.vagasCadastradas = res.vagas;
        this.tamanhoArray = res.tamanhoPagina;
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
    this.router.navigate(['/Estudante/detalhe-vaga', { id: value._id }]);
  }


  public mudancaPagina(): void {
  this.getVagas(); 
  }

}

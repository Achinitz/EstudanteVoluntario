import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Vaga } from 'src/app/models/vaga';
import { EntidadeService } from 'src/app/services/entidade.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss'],
})
export class VagasComponent implements OnInit {
  //Variaveis para a paginação
  paginaAtual = 1;
  itemsPerPage = 5;
  tamanhoArray;
  idUsuario: string;
  
  public formData = new FormGroup({
    filtro: new FormControl(null, Validators.required),
    // estado: new FormControl(null, Validators.required),
  });

  vagasDisponiveis: any = [];

  estadosVagas: any = [
    {
      id: 1,
      nome: 'Aberto',
    },
    {
      id: 2,
      nome: 'Andamento',
    },
    {
      id: 3,
      nome: 'Aprovação',
    },
    {
      id: 4,
      nome: 'Encerrada',
    },
    {
      id: 5,
      nome: 'Cancelada',
    },
  ];

  constructor(
    public dialog: MatDialog,
    private entidadeService: EntidadeService,
    private loginService: LoginService,
    private toast: ToastrService,
    private router: Router
  ) {
    this.idUsuario = this.loginService.usuarioLogado._id;
  }

  ngOnInit(): void {
    this.listarVagas(this.idUsuario);
  }

  getStatus(status: string) {
    if (status == 'APROVACAO') {
      return 'badge bg-warning';
    } else if (status == 'ABERTA') {
      return 'badge bg-success';
    } else if (status == 'INSCRITO') {
      return 'bg-success text-white';
    } else if (status == 'CANCELADA') {
      return 'badge bg-danger';
    } else if (status == 'ANDAMENTO') {
      return 'badge bg-info';
    } else {
      return 'badge bg-secondary';
    }
  }

  filtrarDadosVaga() {}

  listarVagas(idUsuario: string) {
    let page = this.paginaAtual;
    this.entidadeService.listarVagas(idUsuario, page).subscribe({
      next: (res: any) => {
        this.vagasDisponiveis = res.vagas;
        this.tamanhoArray = res.total;
      },
      error: (err: any) => {
        this.toast.error(err?.message);
      },
    });
  }

  exibirDetalhes(value: Vaga): void {
    this.router.navigate(['/Entidade/detalhe-vaga', { id: value._id }]);
  }

  public mudancaPagina(): void {
    this.listarVagas(this.idUsuario);
  }

  possuiInscritos(vaga: Vaga) {   
    if (vaga.inscricoes?.length > 0)
    return true;
    else return false   
  }
}

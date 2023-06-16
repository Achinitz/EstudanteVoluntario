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
  public formData = new FormGroup({
    filtro: new FormControl(null, Validators.required),
    estado: new FormControl(null, Validators.required),
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
  ) {}

  ngOnInit(): void {
    this.listarVagas(this.loginService.usuarioLogado._id);
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

  listarVagas(idUsuario: string) {
    this.entidadeService.listarVagas(idUsuario).subscribe({
      next: (res: any) => {
        this.vagasDisponiveis = res;
      },
      error: (err: any) => {
        this.toast.error(err?.message);
      },
    });
  }

  exibirDetalhes(value: Vaga): void {
    this.router.navigate(['/Entidade/detalhe-vaga', { id: value._id }]);
  }

  //Variaveis para a paginação
  paginaAtual = 1;
  tamanhoPagina: number = this.vagasDisponiveis.length;
  itemsPerPage = 6;
  public vagas: any = this.vagasDisponiveis.slice(0, 6);

  public mudancaPagina(pageNum: number): void {
    this.tamanhoPagina = this.itemsPerPage * (pageNum - 1);
    this.vagas = this.vagasDisponiveis.slice(
      this.tamanhoPagina,
      this.tamanhoPagina + 6
    );
  }
}

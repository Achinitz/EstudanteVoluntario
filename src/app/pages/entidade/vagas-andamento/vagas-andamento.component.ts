import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Vaga } from 'src/app/models/vaga';
import { DataService } from 'src/app/services/data.service';
import { EntidadeService } from 'src/app/services/entidade.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-vagas-andamento',
  templateUrl: './vagas-andamento.component.html',
  styleUrls: ['./vagas-andamento.component.scss']
})
export class VagasAndamentoComponent implements OnInit {

  public formData = new FormGroup({
    filtro: new FormControl(null, Validators.required),
  });

  paginaAtual = 1;
  itemsPerPage = 5;
  tamanhoArray;
  idUsuario: string;
  vagasAndamento: any = [];

  estadosVagas: any = [
    {
      id: 1, nome: 'Aberto',
    },
    {
      id: 2, nome: 'Andamento',
    },
    {
      id: 3, nome: 'Aprovação',
    },
    {
      id: 4, nome: 'Encerrada',
    },
    {
      id: 5, nome: 'Cancelada',
    },
  ]  

  constructor(
    private dataService: DataService,
    private entidadeService: EntidadeService,
    private loginService: LoginService,
    private toast: ToastrService,
    public dialog: MatDialog,        
    private router: Router
  ) {
    this.idUsuario = this.loginService.usuarioLogado._id;
    this.listarVagasAndamento(this.loginService.usuarioLogado._id);
  }

  listarVagasAndamento(idUsuario: string){
    let page = this.paginaAtual ;
    this.entidadeService.listarVagasAndamento(idUsuario,page).subscribe({
      next: (res:any) => {
        this.vagasAndamento = res.vagas;
        this.tamanhoArray = res.total;
      },
      error: (err:any) => {
        this.toast.error(err?.message);
      },
    });
  }

  //Variaveis para a paginação

  public mudancaPagina(): void {
    this.listarVagasAndamento(this.idUsuario);
  }

  getStatus(status: string) {
    if (status == 'APROVACAO') {
      return 'badge bg-warning';
    } else if (status == 'ABERTA') {
      return 'badge bg-success';
    } else if (status == 'INSCRITO') {
      return 'bg-success text-white';
    }else if (status == 'CANCELADA') {
      return 'badge bg-danger';
    } else if (status == 'ANDAMENTO') {
      return 'badge bg-info';
    } else {
      return 'badge bg-secondary';
    }
  }

  //Vai exibir os detalhes da vaga antes de ele efetivar a inscrição
  exibirDetalhes(value: Vaga): void {
    this.router.navigate(['/Entidade/detalhe-vaga', { id: value._id }]);
  }

  ngOnInit(): void {}
}

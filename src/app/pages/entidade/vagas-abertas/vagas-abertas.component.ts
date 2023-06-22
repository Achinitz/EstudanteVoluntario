import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario.model';
import { Vaga } from 'src/app/models/vaga';
import { EntidadeService } from 'src/app/services/entidade.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-vagas-abertas',
  templateUrl: './vagas-abertas.component.html',
  styleUrls: ['./vagas-abertas.component.scss'],
})
export class VagasAbertasComponent implements OnInit {

  paginaAtual = 1;
  itemsPerPage = 5;
  tamanhoArray;
  idUsuario: string;
  usuarioLogado: Usuario;
  vagasDisponiveis: any = [];  

  ngOnInit(): void {
    this.usuarioLogado = this.loginService.usuarioLogado;
    this.buscaVagasAbertas(this.usuarioLogado._id);
  }

  public formData = new FormGroup({
    filtro: new FormControl(null, Validators.required),
  });
  
  constructor(    
    private entidadeService: EntidadeService,
    private loginService: LoginService,
    public dialog: MatDialog,
    private router: Router,
    private toast: ToastrService
  ) {
    this.idUsuario = this.loginService.usuarioLogado._id;
  }

  buscaVagasAbertas(idUsuar: string) {
    let page = this.paginaAtual;
    this.entidadeService.listarVagasAbertas(idUsuar,page).subscribe({
      next: (res: any) => {
        this.vagasDisponiveis = res.vagas;
        this.tamanhoArray = res.total;
      },
      error: (err: any) => {
        this.toast.error(err?.message);
      },
    });
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

  exibirDetalhes(value: Vaga): void {
    this.router.navigate(['/Entidade/detalhe-vaga', { id: value._id }]);
    
  }
  
  //Variaveis para a paginação

  public mudancaPagina(): void {
    this.buscaVagasAbertas(this.idUsuario);
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Vaga } from 'src/app/models/vaga';
import { DataService } from 'src/app/services/data.service';
import { EstudanteService } from 'src/app/services/estudante.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buscar-vagas',
  templateUrl: './buscar-vagas.component.html',
  styleUrls: ['./buscar-vagas.component.scss'],
})
export class BuscarVagasComponent implements OnInit {
  vagasCadastradas: any =[];

  //Paginação
  paginaAtual = 1;
  tamanhoPagina: number = this.vagasCadastradas.length;
  itemsPerPage = 6;
  public vagas: any = this.vagasCadastradas.slice(0, 6);

  constructor(
    public dialog: MatDialog,
    private dataService: DataService,
    private router: Router,
    private estudanteService: EstudanteService,
  ) {
    this.getVagas();
  }

  ngOnInit(): void {}

 
  public mudancaPagina(pageNum: number): void {
    this.tamanhoPagina = this.itemsPerPage * (pageNum - 1);
    this.vagas = this.vagasCadastradas.slice(
      this.tamanhoPagina,
      this.tamanhoPagina + 6
    );
  }

  getVagas(){
    this.estudanteService.listarVagas().subscribe({
      next: (res: any) => {
        this.vagasCadastradas = res.vagas;        
      },
    });
  }

  getStatus(status: string) {
    if (status == 'APROVAÇÃO') {
      return 'bg-warning';
    } else if (status == 'ABERTA') {
      return 'bg-success text-white';
    } else if (status == 'INSCRITO') {
      return 'bg-success text-white';
    }else if (status == 'CANCELADA') {
      return 'bg-danger text-white';
    } else if (status == 'ANDAMENTO') {
      return 'bg-info text-white';
    } else {
      return 'bg-secondary text-white';
    }
  }

  //Vai exibir os detalhes da vaga para efetivar a inscrição
  exibirDetalhes(value: any): void {  
    this.router.navigate(['/Estudante/detalhe-vaga', { id: value._id }]);
       
  }

  //Vai exibir uma modal para cadastro com as validações dos dados
  cadastrar(value: any): void {
    this.dataService.data = this.vagasCadastradas[value];
    this.router.navigate(['/Estudante/detalhe-vaga']);
  }

  //Quando o usuário clicar no botão para cancelar a inscrição
  cancelarInscricao() {
    Swal.fire({
      title: 'Deseja realmente cancelar a sua inscrição nessa vaga?',
      text: 'Ao confirmar, a sua inscrição nessa vaga será cancelada!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Inscrição cancelada com sucesso!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }
 
}

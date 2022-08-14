import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import { DetalhesInscritosComponent } from './detalhes-inscritos/detalhes-inscritos.component';

@Component({
  selector: 'app-detalhe-vaga-entidade',
  templateUrl: './detalhe-vaga-entidade.component.html',
  styleUrls: ['./detalhe-vaga-entidade.component.scss']
})
export class DetalheVagaEntidadeComponent implements OnInit {

  constructor(private dataService:DataService, private modalService: NgbModal) { }

  mostraDetalhesCandidato = this.dataService.show;

  estudantesSelecionados: any = [
    {
      nome: 'Jeronimo',
      img: '../../../../../assets/imagens/ideia.jpg"',
      cpf: '123',
      curso: 'Analise de Sistemas',
      idade: 22,
      dataInscricao: '15/05/2022',
      status: 'Andamento'
    },
    {
      nome: 'Alienigena',
      img: '../../../../../assets/imagens/ideia.jpg"',
      cpf: '1234',
      curso: 'Analise de Sistemas',
      idade: 22,
      dataInscricao: '15/05/2022',
      status: 'Andamento'
    },
    {
      nome: 'Alex',
      img: null,
      cpf: '12345',
      curso: 'Analise de Sistemas',
      idade: 22,
      dataInscricao: '15/05/2022',
      status: 'Andamento'
    },
    {
      nome: 'Tebutrios',
      img: null,
      cpf: '123456',
      curso: 'Analise de Sistemas',
      idade: 22,
      dataInscricao: '15/05/2022',
      status: 'Andamento'
    }
  ];

  detalheCandidato(position:any){

    const modalRef = this.modalService.open(DetalhesInscritosComponent, { windowClass: 'width:90%; heigth: 50%;', backdrop: 'static', keyboard: false, centered: true });

    // const dialogRef = this.dialog.open(DetalhesInscritosComponent, {
    //   width: 'auto',
    //   data: this.vagasDisponiveis[value],
    // });
    this.dataService.data = this.estudantesSelecionados[position];
    this.dataService.show = !this.dataService.show;
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { DetalheVagaEntidadeComponent } from '../home/detalhe-vaga-entidade/detalhe-vaga-entidade.component';

@Component({
  selector: "app-vagas",
  templateUrl: "./vagas.component.html",
  styleUrls: ["./vagas.component.scss"],
})
export class VagasComponent implements OnInit {

  vagasDisponiveis: any = [
    {
      id: 1,
      nomeEntidade: "APAE 1",
      nomeVaga: "Contador de História",
      img: "../../assets/imagens/mulherGrandeCoracao.jpg",
      descricao: "Vaga para pessoas de bom coração",
      status: "Aberto",
    },
    {
      id: 2,
      nomeEntidade: "APAE 2",
      nomeVaga: "Contador de História",
      img: "../../assets/imagens/mulherGrandeCoracao.jpg",
      descricao: "Vaga para pessoas de bom coração",
      status: "Encerrado",
    },
    {
      id: 3,
      nomeEntidade: "APAE 3",
      nomeVaga: "Contador de História",
      img: "../../assets/imagens/mulherGrandeCoracao.jpg",
      descricao: "Vaga para pessoas de bom coração",
      status: "Aberto",
    },
    {
      id: 4,
      nomeEntidade: "APAE 4",
      nomeVaga: "Contador de História",
      img: "../../assets/imagens/mulherGrandeCoracao.jpg",
      descricao: "Vaga para pessoas de bom coração",
      status: "Aberto",
    },
    {
      id: 5,
      nomeEntidade: "APAE 5",
      nomeVaga: "Contador de História",
      img: "../../assets/imagens/mulherGrandeCoracao.jpg",
      descricao: "Vaga para pessoas de bom coração",
      status: "Encerrado",
    },
    {
      id: 6,
      nomeEntidade: "APAE 6",
      nomeVaga: "Contador de História",
      img: "../../assets/imagens/mulherGrandeCoracao.jpg",
      descricao: "Vaga para pessoas de bom coração",
      status: "Aberto",
    },
    {
      id: 7,
      nomeEntidade: "APAE 7",
      nomeVaga: "Contador de História",
      img: "../../assets/imagens/mulherGrandeCoracao.jpg",
      descricao: "Vaga para pessoas de bom coração",
      status: "Cancelado",
    },
    {
      id: 8,
      nomeEntidade: "APAE 8",
      nomeVaga: "Contador de História",
      img: "../../assets/imagens/mulherGrandeCoracao.jpg",
      descricao: "Vaga para pessoas de bom coração",
      status: "Aberto",
    },
    {
      id: 3,
      nomeEntidade: "APAE 9",
      nomeVaga: "Contador de História",
      img: "../../assets/imagens/mulherGrandeCoracao.jpg",
      descricao: "Vaga para pessoas de bom coração",
      status: "Aberto",
    },
    {
      id: 9,
      nomeEntidade: "APAE 10",
      nomeVaga: "Contador de História",
      img: "../../assets/imagens/mulherGrandeCoracao.jpg",
      descricao: "Vaga para pessoas de bom coração",
      status: "Aberto",
    },
    {
      id: 5,
      nomeEntidade: "APAE 11",
      nomeVaga: "Contador de História",
      img: "../../assets/imagens/mulherGrandeCoracao.jpg",
      descricao: "Vaga para pessoas de bom coração",
      status: "Aberto",
    },
    {
      id: 6,
      nomeEntidade: "APAE 12",
      nomeVaga: "Contador de História",
      img: "../../assets/imagens/mulherGrandeCoracao.jpg",
      descricao: "Vaga para pessoas de bom coração",
      status: "Aberto",
    },
  ];

  constructor(
    public dialog: MatDialog,
    private dataService: DataService,
    private router: Router
  ) {}

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

  //Vai exibir os detalhes da vaga antes de ele efetivar a inscrição
    exibirDetalhes(value: any): void {
    const dialogRef = this.dialog.open(DetalheVagaEntidadeComponent, {
      width: "auto",
      data: this.vagasDisponiveis[value],
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      //this.animal = result;
    });
  } 

  ngOnInit(): void {}
}

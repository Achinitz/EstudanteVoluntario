import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  nomeEntidade: any = 'Entidade Teste';

  constructor(private dataService: DataService, private router: Router) {}

  vagasAbertas: any = [
    {
      id: 1,
      nomeEntidade: 'ONG 1',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberta',
    },
    {
      id: 2,
      nomeEntidade: 'ONG 2',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberta',
    },
    {
      id: 3,
      nomeEntidade: 'ONG 3',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberta',
    },
    {
      id: 4,
      nomeEntidade: 'ONG 4',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberta',
    },
  ];

  vagasAprovacao: any = [
    {
      id: 1,
      nomeEntidade: 'ONG 5',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aprovação',
    },
    {
      id: 2,
      nomeEntidade: 'ONG 6',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aprovação',
    },
    {
      id: 3,
      nomeEntidade: 'ONG 7',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aprovação',
    },
    {
      id: 4,
      nomeEntidade: 'ONG 8',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aprovação',
    },
  ];

  finalizarPorUrgencia() {
    Swal.fire({
      title: 'Deseja realmente finalizar esse processo seletivo?',
      text: 'O processo seletivo será fechado antes do prazo previsto, impedindo que outros estudantes possam realizar o cadastro!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Finalizado!',
          text: 'Processo seletivo Finalizado!!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  cancelarProcessoSeletivo() {
    Swal.fire({
      title: 'Deseja realmente cancelar esse processo seletivo?',
      text: 'Ao confirmar, esse processo seletivo será cancelado permanentemente!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Cancelado!',
          text: 'Processo seletivo Cancelado!!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  exibirDetalhes(value: any): void {
    this.dataService.data = value;
    this.router.navigate(['/Entidade/detalhe-vaga']);
  }

  ngOnInit(): void {}
}

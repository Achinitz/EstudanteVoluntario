import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buscar-vagas',
  templateUrl: './buscar-vagas.component.html',
  styleUrls: ['./buscar-vagas.component.scss'],
})
export class BuscarVagasComponent implements OnInit {
  vagasCadastradas: any = [
    {
      id: 1,
      nomeEntidade: 'ONG 1',
      nomeVaga: 'Contador de História 1',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos: 'Gostar de trabalhar com crianças',
      auxilio:'Alimentação e Transporte',      
      endereco:'Rua tal, numero 23 - Bairro - Curitiba/PR - CEP 80010-010',     
      dataFinalizacaoVaga: '20/02/2023 23:59:00',      
      dataInicioTrabalho:'20/02/2023',
      dataTerminoTrabalho:'21/02/2023',
      horarioInicio: '08:00',
      horarioEncerramento:'12:00',
      numeroVagas:'3',
      status: 'Aberta',
      inscrito: true,
    },
    {
      id: 2,
      nomeEntidade: 'ONG 2',
      nomeVaga: 'Contador de História 2',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec mollis sem. Nullam eu imperdiet est, aliquet malesuada ipsum. Nunc id feugiat orci, et blandit erat.',
      requisitos: 'Sem requisitos',
      auxilio: null,
      endereco:'Rua tal, numero 23 - Bairro - Curitiba/PR - CEP 80010-010',     
      dataFinalizacaoVaga: '20/02/2023 23:59:00',      
      dataInicioTrabalho:'20/02/2023',
      dataTerminoTrabalho:'21/02/2023',
      horarioInicio: '13:00',
      horarioEncerramento: '17:00',
      numeroVagas: '3',
      status: 'Aberta',
      inscrito: false,
    },

    {
      id: 3,
      nomeEntidade: 'ONG 3',
      nomeVaga: 'Contador de História 3',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos: null,
      auxilio: null,
      endereco:'Rua tal, numero 23 - Bairro - Curitiba/PR - CEP 80010-010',     
      dataFinalizacaoVaga: '20/02/2023 23:59:00',      
      dataInicioTrabalho:'20/02/2023',
      dataTerminoTrabalho:'21/02/2023',
      horarioInicio: '13:00',
      horarioEncerramento: '17:00',
      numeroVagas: '3',
      status: 'Aberta',
      inscrito: false,
    },
    {
      id: 4,
      nomeEntidade: 'ONG 4',
      nomeVaga: 'Contador de História 4',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos: 'Sem requisitos',
      auxilio: null,
      endereco:'Rua tal, numero 23 - Bairro - Curitiba/PR - CEP 80010-010',     
      dataFinalizacaoVaga: '20/02/2023 23:59:00',      
      dataInicioTrabalho:'20/02/2023',
      dataTerminoTrabalho:'21/02/2023',
      horarioInicio: '13:00',
      horarioEncerramento: '17:00',
      numeroVagas: '3',
      status: 'Aberta',
      inscrito: false,
    },
    {
      id: 5,
      nomeEntidade: 'ONG 5',
      nomeVaga: 'Contador de História 5',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos: 'Sem requisitos',
      auxilio: null,
      endereco:'Rua tal, numero 23 - Bairro - Curitiba/PR - CEP 80010-010',     
      dataFinalizacaoVaga: '20/02/2023 23:59:00',      
      dataInicioTrabalho:'20/02/2023',
      dataTerminoTrabalho:'21/02/2023',
      horarioInicio: '13:00',
      horarioEncerramento: '17:00',
      numeroVagas: '3',
      status: 'Aberta',
      inscrito: false,
    },
    {
      id: 6,
      nomeEntidade: 'ONG 6',
      nomeVaga: 'Contador de História 6',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos: 'Sem requisitos',
      auxilio: null,
      endereco:'Rua tal, numero 23 - Bairro - Curitiba/PR - CEP 80010-010',     
      dataFinalizacaoVaga: '20/02/2023 23:59:00',      
      dataInicioTrabalho:'20/02/2023',
      dataTerminoTrabalho:'21/02/2023',
      horarioInicio: '13:00',
      horarioEncerramento: '17:00',
      numeroVagas: '3',
      status: 'Aberta',
      inscrito: false,
    },
    {
      id: 7,
      nomeEntidade: 'ONG 7',
      nomeVaga: 'Contador de História 7',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos: 'Sem requisitos',
      auxilio: null,
      endereco:'Rua tal, numero 23 - Bairro - Curitiba/PR - CEP 80010-010',     
      dataFinalizacaoVaga: '20/02/2023 23:59:00',      
      dataInicioTrabalho:'20/02/2023',
      dataTerminoTrabalho:'21/02/2023',
      horarioInicio: '13:00',
      horarioEncerramento: '17:00',
      numeroVagas: '3',
      status: 'Aberta',
      inscrito: false,
    },
  ];

  //Paginação
  paginaAtual = 1;
  tamanhoPagina: number = this.vagasCadastradas.length;
  itemsPerPage = 6;
  public vagas: any = this.vagasCadastradas.slice(0, 6);

  constructor(
    public dialog: MatDialog,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {}

 
  public mudancaPagina(pageNum: number): void {
    this.tamanhoPagina = this.itemsPerPage * (pageNum - 1);
    this.vagas = this.vagasCadastradas.slice(
      this.tamanhoPagina,
      this.tamanhoPagina + 6
    );
  }

  getStatus(status: string) {
    if (status == 'Aprovação') {
      return 'bg-warning';
    } else if (status == 'Aberta') {
      return 'bg-success text-white';
    } else if (status == 'Cancelada') {
      return 'bg-danger text-white';
    } else if (status == 'Andamento') {
      return 'bg-info text-white';
    } else {
      return 'bg-secondary text-white';
    }
  }

  //Vai exibir os detalhes da vaga para efetivar a inscrição
  exibirDetalhes(value: any): void {
    this.dataService.data = value;
    this.router.navigate(['/Estudante/detalhe-vaga']);
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

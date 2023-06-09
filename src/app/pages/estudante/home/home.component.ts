import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalVagaComponent } from '../minhas-inscricoes/modal-inscricao/modal-vaga.component';
import { LoginService } from 'src/app/services/login.service';
import { EstudanteService } from 'src/app/services/estudante.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  nomeEstudante: any = 'Estudante Teste';

  vagasInscritas: any = [
    {
      id: 1,
      nomeEntidade: 'ONG 1',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos:'Sem requisitos',
      auxilio:'Alimentação e Transporte',    
      endereco:'Rua tal dos omi lá',
      bairro: 'Cajuru',
      numero: '23',
      cidade: 'Curitiba',
      estado: 'Paraná',
      cep: '81700-000',
      complemento: 'Prédio Comercial',      
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
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos:'Sem requisitos',
      auxilio:'Alimentação e Transporte',    
      endereco:'Rua tal dos omi lá',
      bairro: 'Cajuru',
      numero: '23',
      cidade: 'Curitiba',
      estado: 'Paraná',
      cep: '81700-000',
      complemento: 'Prédio Comercial',      
      dataFinalizacaoVaga: '20/02/2023 23:59:00',      
      dataInicioTrabalho:'20/02/2023',
      dataTerminoTrabalho:'21/02/2023',
      horarioInicio: '08:00',
      horarioEncerramento:'12:00',
      numeroVagas:'3',
      status: 'Andamento',
      inscrito: true,      
    },

    {
      id: 3,
      nomeEntidade: 'ONG 3',
      nomeVaga: 'Contador de História',
      img: '../../assets/imagens/mulherGrandeCoracao.png',
      descricao: 'Vaga para pessoas de bom coração',
      requisitos:'Sem requisitos',
      auxilio: null,    
      endereco:'Rua tal dos omi lá',
      bairro: 'Cajuru',
      numero: '23',
      cidade: 'Curitiba',
      estado: 'Paraná',
      cep: '81700-000',
      complemento: 'Prédio Comercial',      
      dataFinalizacaoVaga: '20/02/2023 23:59:00',      
      dataInicioTrabalho:'20/02/2023',
      dataTerminoTrabalho:'21/02/2023',
      horarioInicio: '08:00',
      horarioEncerramento:'12:00',
      numeroVagas:'3',
      status: 'Aberta',
      inscrito: true, 
    },
  ];

  

  //Variaveis para a paginação
  paginaAtual = 1;
  tamanhoPagina: number = this.vagasInscritas.length;
  itemsPerPage = 6;
  public vagas: any = this.vagasInscritas.slice(0, 6);

  constructor(
    public dialog: MatDialog,
    private dataService: DataService,
    private router: Router,
    private modalService: NgbModal,
    private loginService: LoginService,
    public estudanteService: EstudanteService
  ) {

    this.nomeEstudante = this.loginService.usuarioLogado;
  }

  ngOnInit(): void {}

  public mudancaPagina(pageNum: number): void {
    this.tamanhoPagina = this.itemsPerPage * (pageNum - 1);
    this.vagas = this.vagasInscritas.slice(
      this.tamanhoPagina,
      this.tamanhoPagina + 6
    );
  }

  //Chama modal da inscrição
  visualizarInscricao(Vaga : any){   
    const modalRef = this.modalService.open(ModalVagaComponent, { windowClass: 'auto', backdrop: 'static', centered: true });
    modalRef.componentInstance.vagaSelecionada = Vaga;
  }

  //Cancelar a inscrição
  cancelarInscricao(value: any) {
      Swal.fire({
        title: 'Deseja realmente cancelar sua inscrição para essa vaga?',
        text: "Ao confirmar, sua inscrição será removida!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Sua inscrição foi removida com sucesso!',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }
  
  getStatus(status: string) {
    if (status == 'Aprovação') {
      return 'bg-warning';
    } else if (status == 'Aberta') {
      return 'bg-success text-white';
    } else if (status == 'inscrito') {
      return 'bg-success text-white';
    } else if (status == 'Cancelada') {
      return 'bg-danger text-white';
    } else if (status == 'Andamento') {
      return 'bg-info text-white';
    } else {
      return 'bg-secondary text-white';
    }
  }

}

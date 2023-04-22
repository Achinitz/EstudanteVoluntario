import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { ModalVagaComponent } from './detalhe-vaga/modal-vaga.component';

@Component({
  selector: 'app-minhas-inscricoes',
  templateUrl: './minhas-inscricoes.component.html',
  styleUrls: ['./minhas-inscricoes.component.scss'],
})
export class MinhasInscricoesComponent implements OnInit {
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

    {
      id: 4,
      nomeEntidade: 'ONG 4',
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
      status: 'Encerrada',
      inscrito: true, 
    },
  ];
  
  constructor(
    private modalService: NgbModal,
    public dialog: MatDialog, 
  ) {}

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

  visualizarInscricao(Vaga: any) {
    // this.data.data = Vaga;
    // this.router.navigate(['/Estudante/detalhe-vaga']);
    const modalRef = this.modalService.open(ModalVagaComponent, {
      windowClass: 'auto',
      backdrop: 'static',
      centered: true,
    });
    modalRef.componentInstance.vagaSelecionada = Vaga;
  }

  ngOnInit(): void {}
}

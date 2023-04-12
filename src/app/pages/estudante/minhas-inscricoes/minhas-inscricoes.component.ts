import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { ModalVagaComponent } from './detalhe-vaga/modal-vaga.component';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-minhas-inscricoes',
  templateUrl: './minhas-inscricoes.component.html',
  styleUrls: ['./minhas-inscricoes.component.scss']
})
export class MinhasInscricoesComponent implements OnInit {

  vagasCadastradas: any = [
    {
      id: 1,
      nomeEntidade: 'APAE 1',
      nomeVaga: 'Voluntário Contador de Histórias',      
      img: '../../assets/imagens/mulherGrandeCoracao.jpg',
      descricao: 'Vaga para pessoas de bom coração',
      status: 'Aberto',
      cidade: 'Curitiba',
      estado: 'Paraná',
      numero: 41,
      rua: 'Rua Amador Bueno',
      bairro: 'Cajuru',
      cep: '82960-020',
      obrigacoes: [
        {id: 1, nome: 'Escrever Conteúdos'},
        {id: 2, nome: 'Ser Empático e Acolhedor'},
        {id: 3, nome: 'Ser Articulado'},
        {id: 4, nome: 'Incorporar Personagens'},
      ],
      beneficios: [
        {id: 1, nome: 'Refeição no Local'},
        {id: 2, nome: 'Vale transporte'}
      ],
      inscritos: 5
    },
  ];
  constructor(private modalService: NgbModal, public dialog: MatDialog,
    private router: Router, private data: DataService) { }

    cancelarInscricao(){
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

  visualizarInscricao(Vaga : any){
    // this.data.data = Vaga;
    // this.router.navigate(['/Estudante/detalhe-vaga']);
    const modalRef = this.modalService.open(ModalVagaComponent, { windowClass: 'auto', backdrop: 'static', centered: true });
    modalRef.componentInstance.vagaSelecionada = Vaga;
  }

  ngOnInit(): void {
  }

}
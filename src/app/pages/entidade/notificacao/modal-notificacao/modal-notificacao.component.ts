import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-modal-notificacao',
  templateUrl: './modal-notificacao.component.html',
  styleUrls: ['./modal-notificacao.component.scss']
})
export class ModalNotificacaoComponent implements OnInit {

  notificacao: any = 
    {
      id: 1,
      nomeRemetente: 'ONG 1',
      dataEnvio: '28/01/2023 08:00:00',
      titulo: 'Cancelamento da atividade',
      mensagem:
        'Prezado/a estudante, informamos que a vaga "Contador de História" que iniciaria em 03/02 foi cancelada.',
    };
  

  constructor(private data:DataService, private router: Router, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }


}

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

  public data: any;   

  constructor(private dataService: DataService, private router: Router, public activeModal: NgbActiveModal) {
    this.data = this.dataService.data;
   }

  ngOnInit(): void {
  }


}

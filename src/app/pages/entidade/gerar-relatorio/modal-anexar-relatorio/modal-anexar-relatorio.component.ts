import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-modal-anexar-relatorio',
  templateUrl: './modal-anexar-relatorio.component.html',
  styleUrls: ['./modal-anexar-relatorio.component.scss']
})
export class ModalAnexarRelatorioComponent implements OnInit {

  constructor(private data:DataService, private router: Router, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}

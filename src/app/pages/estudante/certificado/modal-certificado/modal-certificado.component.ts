import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-modal-certificado',
  templateUrl: './modal-certificado.component.html',
  styleUrls: ['./modal-certificado.component.scss']
})
export class ModalCertificadoComponent implements OnInit {
  

  @Input() certificado: any;

  constructor(private data:DataService, private router: Router, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}

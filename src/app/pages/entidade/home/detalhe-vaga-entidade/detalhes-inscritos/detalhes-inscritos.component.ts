import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detalhes-inscritos',
  templateUrl: './detalhes-inscritos.component.html',
  styleUrls: ['./detalhes-inscritos.component.scss']
})
export class DetalhesInscritosComponent implements OnInit {

  constructor(private dataService:DataService,public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Vaga } from 'src/app/models/vaga';

@Component({
  selector: 'app-modal-vaga',
  templateUrl: './modal-vaga.component.html',
  styleUrls: ['./modal-vaga.component.scss'],
})
export class ModalVagaComponent implements OnInit {
  @Input() vagaSelecionada: Vaga;
  @Input() statusInscricao: string;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}

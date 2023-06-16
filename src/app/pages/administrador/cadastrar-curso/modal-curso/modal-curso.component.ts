import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-modal-curso',
  templateUrl: './modal-curso.component.html',
  styleUrls: ['./modal-curso.component.scss'],
})
export class ModalCursoComponent implements OnInit, OnDestroy {
  @Input() cursoSelecionado: any;

  constructor(
    private data: DataService,
    private router: Router,
    public activeModal: NgbActiveModal
  ) {}

  retornar() {
    this.router.navigate(['/Administrador/cadastrar-curso']);
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    console.log(' ******** ' + this.cursoSelecionado.nome + ' ******** ');
  }
}

import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalhes-curso',
  templateUrl: './detalhes-curso.component.html',
  styleUrls: ['./detalhes-curso.component.scss'],
})
export class DetalhesCursoComponent implements OnInit, OnDestroy {
  @Input() cursoSelecionado: any;

  constructor(
    private data: DataService,
    private router: Router,
    public activeModal: NgbActiveModal
  ) {}

  retornar() {
    this.router.navigate(['/Admin/cadastrar-curso']);
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    console.log(' ******** ' + this.cursoSelecionado.nome + ' ******** ');
  }
}

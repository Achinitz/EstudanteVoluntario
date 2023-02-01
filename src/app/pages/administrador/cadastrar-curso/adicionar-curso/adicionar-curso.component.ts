import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionar-curso',
  templateUrl: './adicionar-curso.component.html',
  styleUrls: ['./adicionar-curso.component.scss'],
})
export class AdicionarCursoComponent implements OnInit {
  graus: any = [
    {
      id: 1,
      nome: 'Bacharelado',
    },
    {
      id: 2,
      nome: 'Licenciatura',
    },
    {
      id: 3,
      nome: 'Tecnologia',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-curso',
  templateUrl: './cadastrar-curso.component.html',
  styleUrls: ['./cadastrar-curso.component.scss']
})
export class CadastrarCursoComponent implements OnInit {


graus: any = [
  {
    id: 1,
    nome: 'Bacharelado'
  },
  {
    id: 2,
    nome: 'Licenciatura'
  },
  {
    id: 3,
    nome: 'Tecnologia'
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}

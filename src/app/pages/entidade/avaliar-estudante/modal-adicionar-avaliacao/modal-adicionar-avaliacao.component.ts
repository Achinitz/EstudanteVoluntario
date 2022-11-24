import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-adicionar-avaliacao',
  templateUrl: './modal-adicionar-avaliacao.component.html',
  styleUrls: ['./modal-adicionar-avaliacao.component.scss']
})
export class ModalAdicionarAvaliacaoComponent implements OnInit {

  public formCadastro = new FormGroup({
    cpfEstudante: new FormControl(null, Validators.required),
    observacao: new FormControl(null, Validators.required),
    frequenciaEstudante: new FormControl(null, Validators.required),
    possuiDocumentosPendentes: new FormControl(false, Validators.required),
    documentosPendentes: new FormControl(null, Validators.required),
  });

  estudantes: any = [
    {
      cpf: 123,
      nome: 'José',
      vaga: 'Contador de Histórias'
    },
    {
      cpf: 124,
      nome: 'Gustavo',
      vaga: 'Auxiliar de Contabilidade'
    },
    {
      cpf: 125,
      nome: 'Pedro',
      vaga: 'Estoquista'
    },
    {
      cpf: 126,
      nome: 'Clodoaldo',
      vaga: 'Enfermeiro'
    },
    {
      cpf: 127,
      nome: 'Jesué',
      vaga: 'Desenvolvimento de Sistemas'
    },
    {
      cpf: 128,
      nome: 'Tebutrius',
      vaga: 'Nutricionista'
    },
  ];

  contador:any = [1,2,3,4,5,6,7,8,9,10];

  constructor() { }

  ngOnInit(): void {
  }

}

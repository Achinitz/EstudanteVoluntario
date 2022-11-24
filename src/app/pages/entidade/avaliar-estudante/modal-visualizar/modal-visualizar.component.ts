import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-visualizar',
  templateUrl: './modal-visualizar.component.html',
  styleUrls: ['./modal-visualizar.component.scss']
})
export class ModalVisualizarComponent implements OnInit {

  public formCadastro = new FormGroup({
    nomeEstudante: new FormControl(null, Validators.required),
    cpfEstudante: new FormControl(null, Validators.required),
    dataConclusaoTrabalho: new FormControl(null, Validators.required),
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

  constructor() { }

  ngOnInit(): void {
  }

}

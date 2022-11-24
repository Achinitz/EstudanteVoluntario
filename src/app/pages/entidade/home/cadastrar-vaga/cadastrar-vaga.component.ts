import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-vaga',
  templateUrl: './cadastrar-vaga.component.html',
  styleUrls: ['./cadastrar-vaga.component.scss']
})
export class CadastrarVagaComponent implements OnInit {

  public formCadastro = new FormGroup({
    tituloVaga: new FormControl(null,Validators.required),
    descricao: new FormControl(null, Validators.required),
    requisitos: new FormControl(null, Validators.required),
    possuiAuxilio: new FormControl(false, Validators.required),
    dataInicioTrabalho: new FormControl(null, Validators.required),
    dataTerminoTrabalho: new FormControl(null, Validators.required),
    quantidadeVagas: new FormControl(null, Validators.required),
    horarioInicioExpediente: new FormControl(null, Validators.required),
    horarioEncerramentoExpediente: new FormControl(null, Validators.required),
    utilizarEnderecoEntidade: new FormControl(false, Validators.required),
    cep: new FormControl(null, Validators.required),
    logradouro: new FormControl(null, Validators.required),
    numero: new FormControl(null, Validators.required),
    bairro: new FormControl(null, Validators.required),
    complemento: new FormControl(null, Validators.required),
    estado: new FormControl(null, Validators.required),
    cidade: new FormControl(null, Validators.required),
    termosCondicao: new FormControl(false, Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

}

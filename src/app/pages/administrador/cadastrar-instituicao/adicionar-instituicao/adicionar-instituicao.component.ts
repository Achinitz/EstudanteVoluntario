import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adicionar-instituicao',
  templateUrl: './adicionar-instituicao.component.html',
  styleUrls: ['./adicionar-instituicao.component.scss']
})
export class AdicionarInstituicaoComponent implements OnInit {

  public formCadastro = new FormGroup({
    cnpj: new FormControl(null,[Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$')]),
    razaoSocial: new FormControl(null, Validators.required),
    nomeFantasia: new FormControl(null, Validators.required),
    nomeResponsavelCadastro: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    telefone: new FormControl(null, Validators.required),
    cep: new FormControl(null, Validators.required),
    logradouro: new FormControl(null, Validators.required),
    numero: new FormControl(null, Validators.required),
    bairro: new FormControl(null, Validators.required),
    complemento: new FormControl(null, Validators.required),
    estado: new FormControl(null, Validators.required),
    cidade: new FormControl(null, Validators.required),
    senha: new FormControl(null, Validators.required),
    termo: new FormControl(null, Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

}

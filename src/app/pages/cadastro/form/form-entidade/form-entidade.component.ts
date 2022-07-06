import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConsultaCepService } from 'src/app/services/consulta-cep.service';

@Component({
  selector: 'app-form-entidade',
  templateUrl: './form-entidade.component.html',
  styleUrls: ['./form-entidade.component.scss']
})
export class FormEntidadeComponent implements OnInit {

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

  constructor(private consultaCepService: ConsultaCepService) { }

  

  ngOnInit(): void {
  }

}

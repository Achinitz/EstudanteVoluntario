import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-form-estudante',
  templateUrl: './form-estudante.component.html',
  styleUrls: ['./form-estudante.component.scss']
})
export class FormEstudanteComponent implements OnInit {

  public formCadastro = new FormGroup({
    cpf: new FormControl(null,[Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$')]),
    nomeCompleto: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    telefone: new FormControl(null, Validators.required),
    cep: new FormControl(null, Validators.required),
    logradouro: new FormControl(null, Validators.required),
    numero: new FormControl(null, Validators.required),
    bairro: new FormControl(null, Validators.required),
    complemento: new FormControl(null, Validators.required),
    estado: new FormControl(null, Validators.required),
    Cidade: new FormControl(null, Validators.required),
    senha: new FormControl(null, Validators.required),
    termo: new FormControl(null, Validators.required),
  });
  
  mostrarValores(){
    console.log("Formulário enviado");
  }

  constructor(private enderecoService: EnderecoService) {
    this.enderecoService.getEstados();
   }

  ngOnInit(): void {
  }

}

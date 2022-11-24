import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-meu-perfil-administrador',
  templateUrl: './meu-perfil-administrador.component.html',
  styleUrls: ['./meu-perfil-administrador.component.scss']
})
export class MeuPerfilAdministradorComponent implements OnInit {

  formCadastro = new FormGroup({
    cpf: new FormControl(null,[Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$')]),
    nome: new FormControl(null, Validators.required),
    nomeSocial: new FormControl(null),
    confirmaNomeSocial: new FormControl(false),
    identificacaoGenero: new FormControl(null, Validators.required),
    dataNascimento: new FormControl(null, Validators.required),
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
  });
  
  mostrarValores(){
    console.log("Formulário enviado");
  }

  constructor() { }

  ngOnInit(): void {
  }

}

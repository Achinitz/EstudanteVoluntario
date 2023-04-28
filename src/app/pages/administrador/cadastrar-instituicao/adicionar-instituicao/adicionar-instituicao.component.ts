import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnderecoService } from 'src/app/services/endereco.service';

import { genericAnimations } from 'src/app/shared/animations/animations';


@Component({
  selector: 'app-adicionar-instituicao',
  templateUrl: './adicionar-instituicao.component.html',
  styleUrls: ['./adicionar-instituicao.component.scss'],
  animations: genericAnimations,
})
export class AdicionarInstituicaoComponent implements OnInit {
  estado: any;
  estados: any = [];

  public formCadastro = new FormGroup({
    cnpj: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$'),
    ]),
    nome: new FormControl(null, Validators.required),
    sigla: new FormControl(null, Validators.required),
    uf:  new FormControl(null, Validators.required),
  });

  constructor( private enderecoService: EnderecoService,) { 
    this.inicializaFormulario();
  }

  ngOnInit(): void {
  }

  
  inicializaFormulario() {
    this.enderecoService.getEstados().subscribe((data: any) => {
      this.estados = data;
    });
  }

}

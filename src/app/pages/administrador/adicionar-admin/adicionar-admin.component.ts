import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { genericAnimations } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-adicionar-admin',
  templateUrl: './adicionar-admin.component.html',
  styleUrls: ['./adicionar-admin.component.scss'],
  animations: genericAnimations,
})
export class AdicionarAdminComponent implements OnInit {

  public formCadastro = new FormGroup({
    cpf: new FormControl(null, [
      Validators.required,
      Validators.pattern('[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}'),
    ]),
    nomeCompleto: new FormControl(null, Validators.required),
    nomeSocial: new FormControl(null),    
    email: new FormControl(null, [Validators.required, Validators.email]),   
  });

  constructor() { }

  ngOnInit(): void {
  }

}

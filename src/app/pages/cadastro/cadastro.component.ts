import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  public selectedItem: number = 0;

  public items = [
    { id: 0, name: 'Selecione um perfil' },
    { id: 1, name: 'Entidade' },
    { id: 2, name: 'Estudante' },
  ];

  /* public form = new FormGroup({
    first: new FormControl('Nancy', Validators.minLength(2)),
    last: new FormControl('Drew'),
  }); */

  //constructor(private fb:FormBuilder) { }
  constructor() {}
  ngOnInit(): void {
    // this.formCadastro = this.fb.group({
    //   });
  }
}

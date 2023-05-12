import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-editar-cadastro',
  templateUrl: './editar-cadastro.component.html',
  styleUrls: ['./editar-cadastro.component.scss']
})
export class EditarCadastroComponent implements OnInit {
  estado: any;
  estados: any = [];
  cidades: any = [];
  grauAcademico = [
    {id: 1, nome: 'Tecnólogo'},
    {id: 2, nome: 'Bacharelado'},
    {id: 3, nome: 'Licenciatura'},
    {id: 4, nome: 'Especialização'},
    {id: 5, nome: 'Mestrado'},
    {id: 6, nome: 'Doutorado'},
  ]

  public formCadastro = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(null, Validators.required),
    sigla: new FormControl(null, Validators.required),
    uf:  new FormControl(null, Validators.required),
    cep: new FormControl(null, Validators.required),
    logradouro: new FormControl(null, Validators.required),
    numero: new FormControl(null, Validators.required),
    bairro: new FormControl(null, Validators.required),
    complemento: new FormControl(null, Validators.required),
    estado: new FormControl(null, Validators.required),
    cidade: new FormControl(null, Validators.required),
    cursos: new FormControl(null, Validators.required),
  });

  constructor( private enderecoService: EnderecoService,
    private dataService: DataService,
    private router: Router) { 
      
      // console.log('Editar Instituição');
      // console.log(this.dataService.data);
      
      // this.formCadastro.setValue(this.dataService.data);
      // console.log('valor do formulário');
      // console.log(this.formCadastro.value);

    this.inicializaFormulario();
  }

  ngOnInit(): void {
  }

  
  inicializaFormulario() {
    this.enderecoService.getEstados().subscribe((data: any) => {
      this.estados = data;      
    });
  }

  onAddCidade() {
    console.log('estadooooooooooooooooo');
    console.log(this.formCadastro.get('estado').value)
    console.log('fim estadooooooooooooooooo');
    this.formCadastro.get('cidade')?.value == null;
    this.enderecoService
      .getCidades(this.formCadastro.get('estado')?.value)
      .subscribe((data: any) => {
        this.cidades = data;
      });
  }

  onAddBairro() {
    // console.log('Inicio cidade selecionado');
    // console.log(this.formCadastro.get('cidade')?.value);
    //console.log('Fim cidade selecionado');
  }

}

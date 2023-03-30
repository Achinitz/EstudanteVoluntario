import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnderecoService } from 'src/app/services/endereco.service';
import { ConsultaCepService } from 'src/app/services/consulta-cep.service';
import { genericAnimations } from 'src/app/shared/animations/animations';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  submitted = false;
  estado: any;
  cidade: any;
  bairro: any;
  resultadoCep: any;
  cidades: any = [];
  bairros: any = [];
  estados: any = [];
  
  public formCadastro = new FormGroup({
    cpf: new FormControl(null, [
      Validators.required,
      Validators.pattern('[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}'),
    ]),
    nomeCompleto: new FormControl(null, Validators.required),
    nomeSocial: new FormControl(null),
    confirmaNomeSocial: new FormControl(false),
    identificacaoGenero: new FormControl(null, Validators.required),
    dataNascimento: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    telefone: new FormControl(null, Validators.required),
    cep: new FormControl(null, Validators.required),
    logradouro: new FormControl(null, Validators.required),
    numero: new FormControl(null, Validators.required),
    bairro: new FormControl(null, Validators.required),
    estado: new FormControl(null, Validators.required),
    cidade: new FormControl(null, Validators.required),
    complemento: new FormControl(null, Validators.required),
    senha: new FormControl(null, Validators.required),
    confirmarSenha: new FormControl(null, Validators.required),
    termo: new FormControl(null, Validators.required),
  });

  mostrarValores() {
    console.log('Formulário enviado');
  }
  graus: any = [
    { id: 1, nome: 'Bacharelado' },
    { id: 2, nome: 'Licenciatura' },
    { id: 3, nome: 'Tecnologia' },
  ];
  
  constructor(
    private consultaCepService: ConsultaCepService,
    private enderecoService: EnderecoService,
    private toast: ToastrService
  ) {
    this.inicializaFormulario();
  }

  inicializaFormulario() {
    this.enderecoService.getEstados().subscribe((data: any) => {
      this.estados = data;
      //  console.log('Inicio estados');
      // console.log(data);
      //  console.log('Fim estados');
    });
  }

  ngOnInit(): void {}
}

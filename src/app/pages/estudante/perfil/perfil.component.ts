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
  animations: genericAnimations,
})
export class PerfilComponent implements OnInit {
  submitted = false;
  confirmaNomeSocial: boolean = false;
  cpf = '00000000000'
  estado: any;
  cidade: any;
  bairro: any;
  resultadoCep: any;
  cidades: any = [];
  bairros: any = [];
  estados: any = [];
  graus: any = [
    { id: 1, nome: 'Bacharelado' },
    { id: 2, nome: 'Licenciatura' },
    { id: 3, nome: 'Tecnologia' },
  ];
  instituicoes: any = [
    { id: 1, nome: 'UFPR - Universidade Federal do Paraná' },
    { id: 2, nome: 'UTFPR - Universidade Tecnológica Federal do Paraná' },
  ];
  cursos: any = [
    { id: 1, nome: 'ADMINISTRAÇÃO - CAMPUS JARDIM BOTÂNICO' },
    { id: 2, nome: 'ADMINISTRAÇÃO PÚBLICA - campus centro - REITORIA' },
    { id: 3, nome: 'AGROECOLOGIA - CAMPUS LITORAL' },
    { id: 4, nome: 'AGRONOMIA - CAMPUS AGRÁRIAS' },
  ];
  estadoCivil: any = [
    { id: 1, nome: 'Casado (a)' },
    { id: 2, nome: 'Solteiro (a)' },
    { id: 3, nome: 'Divorciado (a)' },
    { id: 4, nome: 'Viúvo (a)' },
  ];

  public formCadastro = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(null, Validators.required),       
    login: new FormControl(null),
    senha: new FormControl(null),
    perfil: new FormControl(null),
    dataCadastro: new FormControl(null),
    perfilAtivo: new FormControl(null),
    cpf: new FormControl({value:this.cpf, disabled: true},
      Validators.required,       
    ),
    imgPerfil: new FormControl(null, Validators.required),
    nomeSocial: new FormControl(null),
    confirmaNomeSocial: new FormControl(false),
    identificacaoGenero: new FormControl(null, Validators.required),
    estadoCivil: new FormControl(null, Validators.required),
    dataNascimento: new FormControl(null, Validators.required),
    rg: new FormControl(null, Validators.required),
    rgEmissor: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    telefone: new FormControl(null, Validators.required),
    cep: new FormControl(null, Validators.required),
    logradouro: new FormControl(null, Validators.required),
    numero: new FormControl(null, Validators.required),
    bairro: new FormControl(null, Validators.required),
    estado: new FormControl(null, Validators.required),
    cidade: new FormControl(null, Validators.required),
    complemento: new FormControl(null, Validators.required),
    areasInteresse: new FormControl(null, Validators.required),
    experiencias: new FormControl(null, Validators.required),
    instituicao: new FormControl(null, Validators.required),
    grau: new FormControl(null, Validators.required),
    curso: new FormControl(null, Validators.required),
    anoInicio: new FormControl(null, Validators.required),
    anoConclusao: new FormControl(null, Validators.required),
    comprovanteMatricula: new FormControl(null, Validators.required),
    idAdmin: new FormControl(null),
    novaSenha: new FormControl(null),
    confirmarSenha: new FormControl(null),
  });

  mostrarValores() {
    console.log('Formulário enviado');
  }

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
    });
  }

  setNomeSocial() {
    this.confirmaNomeSocial = this.confirmaNomeSocial ? false : true;
  }
  
  onAddCidade() {
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

  validaCep() {
    if (this.formCadastro.get('cep')?.value.length === 8) {
      let cep = this.formCadastro.get('cep')?.value;
      this.consultaCepService.getDataCep(cep.replace('-', '')).subscribe(
        (data: any) => {
          if (data.erro === true) {
            this.toast.error('CEP Inválido!');
          }
          this.resultadoCep = data;
          //  console.log(data);
          this.estados.forEach((element: any) => {
            if (element.sigla === data.uf) {
              this.formCadastro.get('estado')?.setValue(element.id);
            }
          });

          setTimeout(() => {
            this.cidades.forEach((element: any) => {
              if (element.nome === data.localidade) {
                this.formCadastro.get('cidade')?.setValue(element.id);
                this.formCadastro.get('logradouro')?.setValue(data.logradouro);
                this.formCadastro.get('bairro')?.setValue(data.bairro);
              }
            });
          }, 1500);
        },
        (error) => {
          console.log('Ocorreu um erro');
        }
      );
      console.log('CEP ok');
    }
  }

  validarSenha() {
    if (
      this.formCadastro.get('novaSenha')?.value ==
        this.formCadastro.get('confirmarSenha')?.value &&
      !this.formCadastro.get('novaSenha')?.invalid &&
      !this.formCadastro.get('confirmarSenha')?.invalid
    ) {
    } else {
      this.toast.error('As senhas não são iguais!');
    }
  }

  desativarConta(){
    
  }

  ngOnInit(): void {}
}

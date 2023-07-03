import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnderecoService } from 'src/app/services/endereco.service';
import { ConsultaCepService } from 'src/app/services/consulta-cep.service';
import { genericAnimations } from 'src/app/shared/animations/animations';
import { ToastrService } from 'ngx-toastr';
import { EntidadeService } from 'src/app/services/entidade.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-form-entidade',
  templateUrl: './form-entidade.component.html',
  styleUrls: ['./form-entidade.component.scss'],
  animations: genericAnimations,
})
export class FormEntidadeComponent implements OnInit {
  loginInvalido: boolean = false;
  submitted = false;
  estado: any;
  estadoNome: any;
  cidade: any;
  cidadeNome: any;
  bairro: any;
  resultadoCep: any;
  cidades: any = [];
  bairros: any = [];
  estados: any = [];

  public formCadastro = new FormGroup({
    login: new FormControl(null, [Validators.required]),
    razaoSocial: new FormControl(null, Validators.required),
    nome: new FormControl(null, Validators.required),
    nomeFantasia: new FormControl(null, Validators.required),
    nomeResponsavelCadastro: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    telefone: new FormControl(null, Validators.required),
    perfil: new FormControl('ENTIDADE'),
    endereco: new FormGroup({
      cep: new FormControl(null, Validators.required),
      logradouro: new FormControl(null, Validators.required),
      numero: new FormControl(null, Validators.required),
      bairro: new FormControl(null, Validators.required),
      complemento: new FormControl(null),
      estado: new FormControl(null, Validators.required),
      cidade: new FormControl(null, Validators.required),
    }),
    senha: new FormControl(null, Validators.required),
    confirmarSenha: new FormControl(null, Validators.required),
    termo: new FormControl(null, Validators.required),
  });

  mostrarValores() {
    console.log('Formulário enviado');
  }

  constructor(
    private consultaCepService: ConsultaCepService,
    private enderecoService: EnderecoService,
    private toast: ToastrService,
    private entidadeService: EntidadeService,
    private router: Router,    
  ) {
    this.inicializaFormulario();
  }

  ngOnInit(): void {}

  verificaCnpj() {
    if (this.formCadastro.get('login')?.value.length === 14) {
      var cnpj = this.formCadastro.get('login').value;
      if (!this.validarCNPJ(cnpj)) {
        this.formCadastro.controls['login'].setErrors({ incorrect: true });
      }   
    }
  }

  inicializaFormulario() {
    this.enderecoService.getEstados().subscribe((data: any) => {
      this.estados = data;
    });
  }

  onAddCidade() {
    this.enderecoService
      .getCidades(this.formCadastro.get('endereco.estado')?.value)
      .subscribe((data: any) => {
        this.cidades = data;
      });
  }

  validaCep() {
    if (this.formCadastro.get('endereco.cep')?.value.length === 8) {
      let cep = this.formCadastro.get('endereco.cep')?.value;
      this.consultaCepService.getDataCep(cep.replace('-', '')).subscribe(
        (data: any) => {
          if (data.erro === true) {
            this.toast.error('CEP Inválido!');
          }
          this.resultadoCep = data;
          this.estados.forEach((element: any) => {
            if (element.sigla === data.uf) {
              this.formCadastro.get('endereco.estado')?.setValue(element.id);
              this.estadoNome = element.nome;
            }
          });

          setTimeout(() => {
            this.cidades.forEach((element: any) => {
              if (element.nome === data.localidade) {
                this.formCadastro.get('endereco.cidade')?.setValue(element.id);
                this.formCadastro
                  .get('endereco.logradouro')
                  ?.setValue(data.logradouro);
                this.formCadastro.get('endereco.bairro')?.setValue(data.bairro);
                this.cidadeNome = element.nome;
              }
            });
          }, 1500);
        },
        (error) => {
          console.log('Ocorreu um erro');
        }
      );
    }
  }

  validarSenha() {
    if (
      this.formCadastro.get('senha')?.value ==
        this.formCadastro.get('confirmarSenha')?.value &&
      !this.formCadastro.get('senha')?.invalid &&
      !this.formCadastro.get('confirmarSenha')?.invalid
    ) {
      console.log('senha igual');
    } else {
      this.toast.error('As senhas não são iguais!');
    }
  }

  cadastrarEntidade() {
    this.formCadastro
      .get('nome')
      .setValue(this.formCadastro.get('nomeFantasia')?.value);

    this.submitted = true;
    if (this.formCadastro.valid) {
      this.formCadastro.get('endereco.estado')?.setValue(this.estadoNome);
      this.formCadastro.get('endereco.cidade')?.setValue(this.cidadeNome);
      this.entidadeService
        .cadastrarEntidade(this.formCadastro.value)
        .subscribe({
          next: (res: any) => {
            this.toast.success(res.message);
            this.router.navigate(['/login']);
          },
          error: (erro: any) => {
            console.log(erro.error.message);
          },
        });
    } else {
      this.toast.error(
        'Não foi possível prosseguir, verifique os campos do formulário!'
      );
    }
  }

  validarCNPJ(cnpj) {
    let strCNPJ = cnpj.replace(/[^\d]+/g, '');
    if (
      strCNPJ === '00000000000000' ||
      strCNPJ === '11111111111111' ||
      strCNPJ === '22222222222222' ||
      strCNPJ === '33333333333333' ||
      strCNPJ === '44444444444444' ||
      strCNPJ === '55555555555555' ||
      strCNPJ === '66666666666666' ||
      strCNPJ === '77777777777777' ||
      strCNPJ === '88888888888888' ||
      strCNPJ === '99999999999999' ||
      strCNPJ.length !== 14
    ) {
      return false;
    }

    var tamanho = strCNPJ.length - 2;
    var numeros = strCNPJ.substring(0, tamanho);
    var digitos = strCNPJ.substring(tamanho);
    var soma = 0;
    var pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }

    var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != digitos.charAt(0)) {
      return false;
    }

    tamanho = tamanho + 1;
    numeros = strCNPJ.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let k = tamanho; k >= 1; k--) {
      soma += numeros.charAt(tamanho - k) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != digitos.charAt(1)) {
      return false;
    }

    return true;
  }
}

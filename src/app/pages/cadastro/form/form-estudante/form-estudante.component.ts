import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnderecoService } from 'src/app/services/endereco.service';
import { ConsultaCepService } from 'src/app/services/consulta-cep.service';
import { genericAnimations } from 'src/app/shared/animations/animations';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import { EstudanteService } from 'src/app/services/estudante.service';
import { Router } from '@angular/router';
import { InstituicaoService } from 'src/app/services/instituicao.service';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-form-estudante',
  templateUrl: './form-estudante.component.html',
  styleUrls: ['./form-estudante.component.scss'],
  animations: genericAnimations,
})
export class FormEstudanteComponent implements OnInit {
  submitted = false;
  loginInvalido: boolean = false;
  confirmaNomeSocial: boolean = false;
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
  instituicoes: any[] = [];
  cursos: any[] = [];
  estadoCivil: any = [
    { id: 1, nome: 'Casado (a)' },
    { id: 2, nome: 'Solteiro (a)' },
    { id: 3, nome: 'Divorciado (a)' },
    { id: 4, nome: 'Viúvo (a)' },
  ];

  public formCadastro = new FormGroup({
    login: new FormControl(null, [
      Validators.required,
      Validators.pattern('[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}'),
    ]),
    nome: new FormControl(null, Validators.required),
    perfil: new FormControl('ESTUDANTE'),
    nomeSocial: new FormControl(null),
    confirmaNomeSocial: new FormControl(false),
    comprovanteMatricula: new FormControl(null, Validators.required),
    identificacaoGenero: new FormControl(null, Validators.required),
    dataNascimento: new FormControl(null, Validators.required),
    rg: new FormControl(null, Validators.required),
    rgEmissor: new FormControl(null, Validators.required),
    estadoCivil: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    telefone: new FormControl(null, Validators.required),
    endereco: new FormGroup({
      cep: new FormControl(null, Validators.required),
      logradouro: new FormControl(null, Validators.required),
      numero: new FormControl(null, Validators.required),
      bairro: new FormControl(null, Validators.required),
      complemento: new FormControl(null, Validators.required),
      estado: new FormControl(null, Validators.required),
      cidade: new FormControl(null, Validators.required),
    }),
    curso: new FormGroup({
      instituicao: new FormControl(null, Validators.required),
      grau: new FormControl(null, Validators.required),
      campus: new FormControl(null, Validators.required),
      nomeCurso: new FormControl(null, Validators.required),
      anoInicio: new FormControl(null, Validators.required),
      anoConclusao: new FormControl(null, Validators.required),
    }),
    termo: new FormControl(null, Validators.required),
    senha: new FormControl(null, Validators.required),
    confirmarSenha: new FormControl(null, Validators.required),
  });

  mostrarValores() {
    console.log();
  }

  constructor(
    private consultaCepService: ConsultaCepService,
    private enderecoService: EnderecoService,
    private toast: ToastrService,
    private loginService: LoginService,
    private estudanteService: EstudanteService,
    private router: Router,
    private instituicaoService: InstituicaoService,
    private cursoService: CursoService
  ) {
    this.inicializaFormulario();
  }

  verificaCpfExistente() {
    if (this.formCadastro.get('login')?.value.length === 11) {
          
      let cpf = JSON.stringify(this.formCadastro.get('login').value);
      console.log(cpf);
    
      //verifica se o cpf tem dígitos válidos - OK
   /*    if (!this.isValidCPF(cpf)) {
        this.formCadastro.controls['login'].setErrors({ incorrect: true });
      } else  */

      //verifica se tem cadastro - ERRO: o back não está recebendo o cpf
      this.loginService.verificarLogin(cpf).subscribe({
        next: (res: any) => {
          console.log(res);
          this.loginInvalido = res.cadastro;
         // this.toast.warning('CPF já cadastrado!');
        },
        error: (err: any) => {
          this.loginInvalido = err;
        },
      });
    }
  }

  inicializaFormulario() {
    this.instituicaoService.listarIes().subscribe({
      next: (res: any) => {
        this.instituicoes = res.instituicoes;
      },
    });
    this.enderecoService.getEstados().subscribe((data: any) => {
      this.estados = data;
      //  console.log('Inicio estados');
      // console.log(data);
      //  console.log('Fim estados');
    });
  }

  setNomeSocial() {
    this.confirmaNomeSocial = this.confirmaNomeSocial ? false : true;
  }

  onAddCidade() {
    // if(this.formCadastro.get("estado")?.value === null && ){
    //   this.formCadastro.get('cidade')?.setValue(null)
    // }
    this.enderecoService
      .getCidades(this.formCadastro.get('endereco.estado')?.value)
      .subscribe((data: any) => {
        this.cidades = data;
      });
  }

  onAddBairro() {
    //console.log('Inicio cidade selecionado');
    //console.log(this.formCadastro.get('cidade')?.value);
    //console.log('Fim cidade selecionado');
  }

  onAddCurso() {
    this.cursoService
      .listarCursos(this.formCadastro.get('curso.instituicao').value)
      .subscribe({
        next: (res: any) => {
          this.cursos = res;
        },
        error: (err: any) => {
          this.toast.error(err.message);
        },
      });
  }

  onAddFile(event: any) {
    console.log(event.file[0]);
  }

  onCheckMinDate(event: any) {
    console.log(event.file[0]);
  }

  onCheckMaxDate(event: any) {
    console.log(event.file[0]);
  }

  validaCep() {
    //console.log(this.formCadastro.get('cep')?.value.length);
    if (this.formCadastro.get('endereco.cep')?.value.length === 8) {
      let cep = this.formCadastro.get('endereco.cep')?.value;
      this.consultaCepService.getDataCep(cep.replace('-', '')).subscribe(
        (data: any) => {
          if (data.erro === true) {
            this.toast.error('CEP Inválido!');
          }
          this.resultadoCep = data;
          console.log(data);
          this.estados.forEach((element: any) => {
            if (element.sigla === data.uf) {
              this.formCadastro.get('endereco.estado')?.setValue(element.id);
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

  isValidCPF(cpf: any) {
    if (typeof cpf !== 'string') return false;
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;
    cpf = cpf.split('').map((el: any) => +el);
    const rest = (count: number) =>
      ((cpf
        .slice(0, count - 12)
        .reduce(
          (soma: number, el: number, index: number) =>
            soma + el * (count - index),
          0
        ) *
        10) %
        11) %
      10;
    return rest(10) === cpf[9] && rest(11) === cpf[10];
  }

  validarSenha() {
    if (
      this.formCadastro.get('senha')?.value ==
        this.formCadastro.get('confirmarSenha')?.value &&
      !this.formCadastro.get('senha')?.invalid &&
      !this.formCadastro.get('confirmarSenha')?.invalid
    ) {
      //console.log('senha igual');
    } else {
      this.toast.error('As senhas não são iguais!');
    }
  }

  async inputFileChange(event){
    if(event.target.files && event.target.files[0]){
      let file = event.target.files[0];       
      let byteArrray = await toByteArray(file);
      let base64 = await toBase64(file);
      
      this.formCadastro.get('comprovanteMatricula').setValue({ file: base64.toString().split(",")[1], fileName: file.name, contentType: file.type });
    }
  }

  removeFile(){       
    this.formCadastro.get('comprovanteMatricula').setValue('');
  }

  ngOnInit(): void {}

  cadastrarEstudante() {
    // this.formCadastro.get('nome').setValue(
    //   this.formCadastro.get('nomeSocial')?.value != null || '' ? this.formCadastro.get('nomeSocial').value :this.formCadastro.get('nome').value
    //   );

    this.submitted = true;
    if (this.formCadastro.valid) {
      this.estudanteService
        .cadastrarEstudante(this.formCadastro.value)
        .subscribe({
          next: (res: any) => {
            this.toast.success(res.message);
            this.router.navigate(['/login']);
          },
          error: (erro: any) => {
            this.toast.error(erro);
          },
        });
    } else {
      this.toast.error(
        'Não foi possível prosseguir, verifique os campos do formulário!'
      );
    }
  }
}

const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = reject;
});

const toByteArray = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);
  reader.onload = () => resolve(new Uint8Array(reader.result as ArrayBuffer));
  reader.onerror = error => reject(error);
});
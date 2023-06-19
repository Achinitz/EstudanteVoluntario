import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnderecoService } from 'src/app/services/endereco.service';
import { ConsultaCepService } from 'src/app/services/consulta-cep.service';
import { genericAnimations } from 'src/app/shared/animations/animations';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import { VagaService } from 'src/app/services/vaga.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-vaga',
  templateUrl: './cadastrar-vaga.component.html',
  styleUrls: ['./cadastrar-vaga.component.scss'],
  animations: genericAnimations,
})
export class CadastrarVagaComponent implements OnInit {
  toppings = new FormControl('');
  listaDiasTrabalho: string[] = [];

  imagem: string = '../../../../assets/imagens/cadastroImagem.jpg';

  usuario: any;
  submitted = false;
  utilizarEnderecoEntidade: boolean = false;
  imagemDaVaga: any;
  possuiAuxilio: boolean = false;
  termosCondicao: boolean = false;
  dataMin: any;
  dataInicio: any;
  hoje: Date = new Date();
  dataMaxFimInscricao: any;
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
    imgVaga:new FormGroup({
      file: new FormControl(null),
    }),
    nomeVaga: new FormControl(null, Validators.required),
    descricao: new FormControl(null, Validators.required),
    requisitos: new FormControl(null),
    diasTrabalho: new FormControl(null),
    auxilio: new FormControl(false),
    descricaoAuxilio: new FormControl(null),
    numeroVagas: new FormControl(0, Validators.required),
    dataAbertudaVaga: new FormControl(null),
    dataFinalizacaoVaga: new FormControl(null, Validators.required),
    dataInicioTrabalho: new FormControl(null, Validators.required),
    dataTerminoTrabalho: new FormControl(null, Validators.required),
    horarioInicioTrabalho: new FormControl('08:00', Validators.required),
    horarioEncerramentoTrabalho: new FormControl('17:00', Validators.required),
    utilizarEnderecoEntidade: new FormControl(this.utilizarEnderecoEntidade),
    endereco: new FormGroup({
      cep: new FormControl(null),
      logradouro: new FormControl(null),
      numero: new FormControl(null),
      bairro: new FormControl(null),
      complemento: new FormControl(null),
      estado: new FormControl(null),
      cidade: new FormControl(null),
    }),
    termoCondicao: new FormControl(this.termosCondicao, Validators.required),
  });

  constructor(
    private consultaCepService: ConsultaCepService,
    private enderecoService: EnderecoService,
    private loginService: LoginService,
    private vagaService: VagaService,
    private toast: ToastrService,
    private router: Router
  ) {
    this.usuario = this.loginService.usuarioLogado;
    this.inicializaFormulario();
    this.dataMinima();
  }

  cadastrarVaga() {
    this.formCadastro.get('endereco.estado')?.setValue(this.estadoNome);
    this.formCadastro.get('endereco.cidade')?.setValue(this.cidadeNome);
    this.vagaService
      .cadastrarVaga(this.formCadastro.value, this.usuario._id)
      .subscribe({
        next: (res: any) => {
          this.toast.success('Cadastrado com Sucesso');
          this.router.navigate(['/Entidade']);
        },
        error: (err: any) => {
          this.toast.error('Ocorre um erro');
        },
      });

    if (this.formCadastro.invalid) {
      this.toast.error('Verifique os campos Requeridos!');
      this.formCadastro.errors;
    }
  }

  checkboxListChange(value: string) {
    if (this.listaDiasTrabalho.indexOf(value) != -1) {
      this.listaDiasTrabalho = this.listaDiasTrabalho.filter((val: any) => {
        return val != value;
      });
    } else {
      this.listaDiasTrabalho.push(value);
    }
    this.formCadastro.get('diasTrabalho').setValue(this.listaDiasTrabalho);
  }

  mostrarValores() {
    console.log('Formulário enviado');
    console.log(this.formCadastro.value);
  }

  setAuxilio() {
    this.possuiAuxilio = this.possuiAuxilio ? false : true;
  }

  setEndereco() {
    this.utilizarEnderecoEntidade = this.utilizarEnderecoEntidade
      ? false
      : true;
  }

  aceitarTermo() {
    this.termosCondicao = this.termosCondicao ? false : true;
  }

  async inputFileChange(event) {
    if(event.target.files && event.target.files[0]){
      let file = event.target.files[0];       

      let base64 = await toBase64(file);
       this.imagem = 'data:' + file.type + ';base64,' + base64.toString().split(",")[1];
       this.imagem = this.imagem.toString();

      const reader = new FileReader();

      reader.addEventListener("load", () => {
        reader.readAsDataURL(event.target.files[0]);
      });

      this.formCadastro.get('imgVaga.file').setValue(this.imagem);
    }
  }

  fimInscricao() {
    const inicio = new Date(this.formCadastro.get('dataInicioTrabalho').value);
    var year = inicio.getFullYear();
    var month = inicio.getMonth();
    var day = inicio.getDate();
    this.dataMaxFimInscricao = new Date(year, month, day - 1);
  }

  dataMinima() {
    var year = this.hoje.getFullYear();
    var month = this.hoje.getMonth();
    var day = this.hoje.getDate();

    this.dataMin = new Date(year, month, day + 5);
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

  onAddBairro() {
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
          console.log(data);
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
      console.log('saiu na api');
    }
  }

  ngOnInit(): void {}
}

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

const toByteArray = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => resolve(new Uint8Array(reader.result as ArrayBuffer));
    reader.onerror = (error) => reject(error);
  });

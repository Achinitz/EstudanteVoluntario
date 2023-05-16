import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnderecoService } from 'src/app/services/endereco.service';
import { ConsultaCepService } from 'src/app/services/consulta-cep.service';
import { genericAnimations } from 'src/app/shared/animations/animations';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';

@Component({
  selector: 'app-cadastrar-vaga',
  templateUrl: './cadastrar-vaga.component.html',
  styleUrls: ['./cadastrar-vaga.component.scss'],
  animations: genericAnimations,
})
export class CadastrarVagaComponent implements OnInit {
  submitted = false;
  utilizarEnderecoEntidade: boolean = true;
  possuiAuxilio: boolean = false;
  termosCondicao: boolean = false;
  dataMin: any;
  dataInicio: any;
  hoje: Date = new Date();
  dataMaxFimInscricao: any;
  estado: any;
  cidade: any;
  bairro: any;
  resultadoCep: any;
  cidades: any = [];
  bairros: any = [];
  estados: any = [];

  public formCadastro = new FormGroup({
    tituloVaga: new FormControl(null, Validators.required),
    descricao: new FormControl(null, Validators.required),
    requisitos: new FormControl(null, Validators.required),
    possuiAuxilio: new FormControl(false, Validators.required),
    descricaoAuxilio: new FormControl(null, Validators.required),
    dataInicioTrabalho: new FormControl(null, Validators.required),
    dataTerminoTrabalho: new FormControl(null, Validators.required),
    quantidadeVagas: new FormControl(null, Validators.required),
    horarioInicio: new FormControl(null, Validators.required),
    horarioEncerramento: new FormControl(null, Validators.required),
    utilizarEnderecoEntidade: new FormControl(
      this.utilizarEnderecoEntidade,
      Validators.required
    ),
    cep: new FormControl(null, Validators.required),
    logradouro: new FormControl(null, Validators.required),
    numero: new FormControl(null, Validators.required),
    bairro: new FormControl(null, Validators.required),
    complemento: new FormControl(null, Validators.required),
    estado: new FormControl(null, Validators.required),
    cidade: new FormControl(null, Validators.required),
    dataFinalizacaoVaga: new FormControl(null, Validators.required),
    termosCondicao: new FormControl(false, Validators.required),
  });

  mostrarValores() {
    console.log('Formulário enviado');
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

  fimInscricao() {   
    const inicio = new Date (this.formCadastro.get('dataInicioTrabalho').value);
    var year = inicio.getFullYear();
    var month = inicio.getMonth();
    var day = inicio.getDate();
    this.dataMaxFimInscricao = new Date(year,month,day-1);  
  }

  dataMinima() {
    var year = this.hoje.getFullYear();
    var month = this.hoje.getMonth();
    var day = this.hoje.getDate();

    this.dataMin = new Date(year,month,day+5);    
  }

  constructor(
    private consultaCepService: ConsultaCepService,
    private enderecoService: EnderecoService,
    private toast: ToastrService
  ) {
    this.inicializaFormulario();
    this.dataMinima();
  }

  inicializaFormulario() {
    this.enderecoService.getEstados().subscribe((data: any) => {
      this.estados = data;
    });
  }

  onAddCidade() {
    this.enderecoService
      .getCidades(this.formCadastro.get('estado')?.value)
      .subscribe((data: any) => {
        this.cidades = data;
      });
  }

  onAddBairro() {
    /* console.log('Inicio cidade selecionado');
    console.log(this.formCadastro.get('cidade')?.value);
    console.log('Fim cidade selecionado'); */
  }

  validaCep() {
    console.log(this.formCadastro.get('cep')?.value.length);
    if (this.formCadastro.get('cep')?.value.length === 8) {
      let cep = this.formCadastro.get('cep')?.value;
      this.consultaCepService.getDataCep(cep.replace('-', '')).subscribe(
        (data: any) => {
          if (data.erro === true) {
            this.toast.error('CEP Inválido!');
          }
          this.resultadoCep = data;
          console.log(data);
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
      console.log('saiu na api');
    }
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnderecoService } from 'src/app/services/endereco.service';
import { ConsultaCepService } from 'src/app/services/consulta-cep.service';
import { genericAnimations } from 'src/app/shared/animations/animations';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastrar-vaga',
  templateUrl: './cadastrar-vaga.component.html',
  styleUrls: ['./cadastrar-vaga.component.scss'],
  animations: genericAnimations,
})
export class CadastrarVagaComponent implements OnInit {
  submitted = false;
  utilizarEnderecoEntidade = true;
  estado: any;
  cidade: any;
  bairro: any;
  resultadoCep: any;
  cidades: any = [];
  bairros: any = [];
  estados: any = [];

  public formCadastro = new FormGroup({
    tituloVaga: new FormControl(null,Validators.required),
    descricao: new FormControl(null, Validators.required),
    requisitos: new FormControl(null, Validators.required),
    possuiAuxilio: new FormControl(false, Validators.required),
    dataInicioTrabalho: new FormControl(null, Validators.required),
    dataTerminoTrabalho: new FormControl(null, Validators.required),
    quantidadeVagas: new FormControl(null, Validators.required),
    horarioInicio: new FormControl(null, Validators.required),
    horarioEncerramento: new FormControl(null, Validators.required),
    utilizarEnderecoEntidade: new FormControl(this.utilizarEnderecoEntidade, Validators.required),
    cep: new FormControl(null, Validators.required),
    logradouro: new FormControl(null, Validators.required),
    numero: new FormControl(null, Validators.required),
    bairro: new FormControl(null, Validators.required),
    complemento: new FormControl(null, Validators.required),
    estado: new FormControl(null, Validators.required),
    cidade: new FormControl(null, Validators.required),
    termosCondicao: new FormControl(false, Validators.required),
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

setEndereco(){
  this.utilizarEnderecoEntidade=true;
  console.log('true');
}

  inicializaFormulario() {
    this.enderecoService.getEstados().subscribe((data: any) => {
      this.estados = data;
      //console.log('Inicio estados');
      //console.log(data);
      //console.log('Fim estados');
    });
  }

  onAddCidade() {
    // if(this.formCadastro.get("estado")?.value === null && ){
    //   this.formCadastro.get('cidade')?.setValue(null)
    // }
    this.enderecoService
      .getCidades(this.formCadastro.get('estado')?.value)
      .subscribe((data: any) => {
        this.cidades = data;
      });
  }

  onAddBairro() {
    console.log('Inicio cidade selecionado');
    console.log(this.formCadastro.get('cidade')?.value);
    console.log('Fim cidade selecionado');
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

  ngOnInit(): void {
  }

}

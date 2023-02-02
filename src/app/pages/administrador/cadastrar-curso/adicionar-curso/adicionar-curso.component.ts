import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ConsultaCepService } from "src/app/services/consulta-cep.service";
import { EnderecoService } from "src/app/services/endereco.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-adicionar-curso",
  templateUrl: "./adicionar-curso.component.html",
  styleUrls: ["./adicionar-curso.component.scss"],
})
export class AdicionarCursoComponent implements OnInit {
  estado: any;
  cidade: any;
  bairro: any;
  resultadoCep: any;
  cidades: any = [];
  bairros: any = [];
  estados: any = [];

  graus: any = [
    {
      id: 1,
      nome: "Bacharelado",
    },
    {
      id: 2,
      nome: "Licenciatura",
    },
    {
      id: 3,
      nome: "Tecnologia",
    },
  ];

  instituicoes: any = [
    {
      cnpj: 75054940000162,
      nome: 'UNIVERSIDADE FEDERAL DO PARANÁ',
      sigla: 'UFPR'
    },
    {
      cnpj: 75054940000162,
      nome: 'UNIVERSIDADE TECNOLÓGICA FEDERAL DO PARANÁ',
      sigla: 'UTFPR'
    },
    {
      cnpj: 75054940000162,
      nome: 'PONTIFÍCIA UNIVERSIDADE CATÓLICA DO PARANÁ',
      sigla: 'PUCPR'
    },
    {
      cnpj: 75054940000162,
      nome: 'UNIVERSIDADE POSITIVO',
      sigla: 'UP'
    },
    {
      cnpj: 75054940000162,
      nome: 'CENTRO UNIVERSITÁRIO CURITIBA',
      sigla: 'UNICURITIBA'
    },
    {
      cnpj: 75054940000162,
      nome: 'CENTRO UNIVERSITÁRIO INTERNACIONAL',
      sigla: 'UNINTER'
    },
    {
      cnpj: 75054940000162,
      nome: 'CENTRO UNIVERSITÁRIO AUTÔNOMO DO BRASIL',
      sigla: 'UNIBRASIL'
    },    
  ];
  

  formCadastro: FormGroup = new FormGroup({
    cnpj: new FormControl(null, [
      Validators.required,
      Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$"),
    ]),
    ies: new FormControl(null, Validators.required),
    grau: new FormControl(null, Validators.required),
    nomeCurso: new FormControl(null, Validators.required),
    campus: new FormControl(null, Validators.required),
    cep: new FormControl(null, Validators.required),
    logradouro: new FormControl(null, Validators.required),
    numero: new FormControl(null, Validators.required),
    bairro: new FormControl(null, Validators.required),
    complemento: new FormControl(null, Validators.required),
    estado: new FormControl(null, Validators.required),
    cidade: new FormControl(null, Validators.required),
  });

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
      console.log("Inicio estados");
      console.log(data);
      console.log("Fim estados");
    });
  }

  onAddCidade() {
    // if(this.formCadastro.get("estado")?.value === null && ){
    //   this.formCadastro.get('cidade')?.setValue(null)
    // }
    this.enderecoService
      .getCidades(this.formCadastro.get("estado")?.value)
      .subscribe((data: any) => {
        this.cidades = data;
      });
  }

  onAddBairro() {
    console.log("Inicio cidade selecionado");
    console.log(this.formCadastro.get("cidade")?.value);
    console.log("Fim cidade selecionado");
  }

  validaCep() {
    console.log(this.formCadastro.get("cep")?.value.length);
    if (this.formCadastro.get("cep")?.value.length === 8) {
      let cep = this.formCadastro.get("cep")?.value;
      this.consultaCepService.getDataCep(cep.replace("-", "")).subscribe(
        (data: any) => {
          if (data.erro === true) {
            this.toast.error("CEP Inválido!");
          }
          this.resultadoCep = data;
          console.log(data);
          this.estados.forEach((element: any) => {
            if (element.sigla === data.uf) {
              this.formCadastro.get("estado")?.setValue(element.id);
            }
          });

          setTimeout(() => {
            this.cidades.forEach((element: any) => {
              if (element.nome === data.localidade) {
                this.formCadastro.get("cidade")?.setValue(element.id);
                this.formCadastro.get("logradouro")?.setValue(data.logradouro);
                this.formCadastro.get("bairro")?.setValue(data.bairro);
              }
            });
          }, 1500);
        },
        (error) => {
          console.log("Ocorreu um erro");
        }
      );
      console.log("saiu na api");
    }
  }

  mostrarValores() {
    console.log("Formulário enviado");
  }

  ngOnInit(): void {}
}

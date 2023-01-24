import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConsultaCepService } from 'src/app/services/consulta-cep.service';
import { EnderecoService } from 'src/app/services/endereco.service';
import { genericAnimations } from 'src/app/shared/animations/animations';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-meu-perfil-administrador',
  templateUrl: './meu-perfil-administrador.component.html',
  styleUrls: ['./meu-perfil-administrador.component.scss'],
  animations: genericAnimations
})
export class MeuPerfilAdministradorComponent implements OnInit {
  estado: any;
  cidade: any;
  bairro: any;
  resultadoCep: any;
  cidades: any = [];
  bairros: any = [];
  estados: any = [];

  formCadastro:FormGroup = new FormGroup({
    cpf: new FormControl(null,[Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$')]),
    nome: new FormControl(null, [Validators.required]),
    sobrenome: new FormControl('', [Validators.required]),
    nomeSocial: new FormControl(null),
    confirmaNomeSocial: new FormControl(false),
    identificacaoGenero: new FormControl(null, Validators.required),
    dataNascimento: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    telefone: new FormControl(null, Validators.required),
    cep: new FormControl(null, Validators.required),
    logradouro: new FormControl(null, Validators.required),
    numero: new FormControl(null, Validators.required),
    bairro: new FormControl(null, Validators.required),
    complemento: new FormControl(null, Validators.required),
    estado: new FormControl(null, Validators.required),
    cidade: new FormControl(null, Validators.required),
    senha: new FormControl(null, Validators.required),
    confirmarSenha: new FormControl(null, Validators.required)
  });

  constructor(private consultaCepService: ConsultaCepService, private enderecoService: EnderecoService, private toast: ToastrService) { 
    this.inicializaFormulario();
  }

  inicializaFormulario(){
    this.enderecoService.getEstados().subscribe(
      (data:any) => {
        this.estados = data;
        console.log("Inicio estados")
        console.log(data)
        console.log("Fim estados")
      }
    )
  }

  onAddCidade(){
    
    // if(this.formCadastro.get("estado")?.value === null && ){
    //   this.formCadastro.get('cidade')?.setValue(null)
    // }
    this.enderecoService.getCidades(this.formCadastro.get("estado")?.value).subscribe(
      (data:any) => {
        this.cidades = data;
      }
    )
  }

  onAddBairro(){
    console.log("Inicio cidade selecionado")
    console.log(this.formCadastro.get("cidade")?.value)
    console.log("Fim cidade selecionado")
  }

  validaCep(){
    console.log(this.formCadastro.get('cep')?.value.length)
    if(this.formCadastro.get('cep')?.value.length ===8){
      let cep = this.formCadastro.get('cep')?.value;
      this.consultaCepService.getDataCep(cep.replace('-','')).subscribe(
        (data:any) => {
          if(data.erro === true){
            this.toast.error('CEP Inválido!')
          }
          this.resultadoCep = data;
          console.log(data)
          this.estados.forEach( (element:any) => {
             if(element.sigla === data.uf){
              this.formCadastro.get('estado')?.setValue(element.id)
             }
        });

        setTimeout( () => {
          this.cidades.forEach( (element:any) => {
            if(element.nome === data.localidade){
             this.formCadastro.get('cidade')?.setValue(element.id);
             this.formCadastro.get('logradouro')?.setValue(data.logradouro);
             this.formCadastro.get('bairro')?.setValue(data.bairro);
            } 
          });
        }, 1500 )

        },
        (error) => {
          console.log('Ocorreu um erro')
        })
      console.log('saiu na api')
    }
  }

  isValidCPF(cpf:any) {
    if (typeof cpf !== "string") 
    {
      this.toast.error('CPF Inválido!')
      return false;
    }
    cpf = cpf.replace(/[\s.-]*/igm, '')
    if (
        !cpf ||
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999" 
    ) {
        this.toast.error('CPF Inválido!');
        return false;
    }
    let soma = 0
    let resto
    for (var i = 1; i <= 9; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(9, 10)) ){
      this.toast.error('CPF Inválido!');
      return false;
    }
    soma = 0
    for (let i = 1; i <= 10; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(10, 11) ) ){ 
      this.toast.error('CPF Inválido!');
      return false;
    }
    return true
}

  validarSenha(){
     if(this.formCadastro.get('senha')?.value == this.formCadastro.get('confirmarSenha')?.value && 
     !this.formCadastro.get('senha')?.invalid && !this.formCadastro.get('confirmarSenha')?.invalid){
       console.log('senha igual')
     }else{
      this.toast.error('As senhas não são iguais!');
     }
  }

  
  mostrarValores(){
    console.log("Formulário enviado");
  }

  ngOnInit(): void {
  }

}

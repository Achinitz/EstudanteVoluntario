import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnderecoService } from 'src/app/services/endereco.service';
import { ConsultaCepService } from 'src/app/services/consulta-cep.service';
import { genericAnimations } from 'src/app/shared/animations/animations';
import { ToastrService } from 'ngx-toastr';
import { EstudanteService } from 'src/app/services/estudante.service';
import { LoginService } from 'src/app/services/login.service';
import { CursoService } from 'src/app/services/curso.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  animations: genericAnimations,
})
export class PerfilComponent implements OnInit {
  fotoPerfil:any;
  senha: any;
  novaSenha: any;
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
    nomeCompleto: new FormControl(null, Validators.required),       
    // login: new FormControl(null),
    senha: new FormControl(null),
    // imgPerfil: new FormControl(null, Validators.required),
    nomeSocial: new FormControl(null),
    confirmaNomeSocial: new FormControl(false),
    identificacaoGenero: new FormControl(null, Validators.required),
    estadoCivil: new FormControl(null, Validators.required),
    dataNascimento: new FormControl(null, Validators.required),
    rg: new FormControl(null, Validators.required),
    rgEmissor: new FormControl(null, Validators.required),
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
    areasInteresse: new FormControl(null, Validators.required),
    experiencias: new FormControl(null),    
    curso: new FormGroup({
      instituicao: new FormControl(null, Validators.required),
      grau: new FormControl(null, Validators.required),
      campus: new FormControl(null, Validators.required),
      nomeCurso: new FormControl(null, Validators.required),
      anoInicio: new FormControl(null, Validators.required),
      anoConclusao: new FormControl(null, Validators.required),
    }),
    comprovanteMatricula: new FormControl(null, Validators.required),
    idAdmin: new FormControl(null),
  });

  mostrarValores() {
    console.log('Formulário enviado');
  }

  constructor(
    private consultaCepService: ConsultaCepService,
    private enderecoService: EnderecoService,
    private estudanteService: EstudanteService,
    private loginService: LoginService,
    private cursoService: CursoService,
    private router: Router,
    private toast: ToastrService
  ) {
    
    this.estudanteService.getPerfilEstudante(this.loginService.usuarioLogado._id).subscribe({
      next: (res:any) => {
        console.log(res);
        this.formCadastro.patchValue(res.estudante);        
      }
    });

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

  perfilEstudante(){
    console.log(this.formCadastro.value)
  }

  async inputFileImage(event){

      let imagem = event.target.files[0];
      let file = event.target.files[0];       
      let byteArrray = await toByteArray(file);
      let base64 = await toBase64(file);
      this.formCadastro.get('imgPerfil').setValue({ file: base64.toString().split(",")[1], fileName: file.name, contentType: file.type });  
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

    Swal.fire({
      title: 'Deseja realmente desativar o seu Perfil?',
      text: 'Ao confirmar, seu perfil será desativado.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Perfil desativado com Sucesso!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        }).then(
          () => {  
            console.log(this.loginService.usuarioLogado._id);
            this.loginService.desativar(this.loginService.usuarioLogado._id).subscribe({
              next: (res:any) => {
                this.toast.success(res.message);
                this.router.navigate(['/']);
                localStorage.clear();
              },
              error: (err:any) => {
                this.toast.error(err.message);
              }
            });
          }
        )
      }});
  }

  ngOnInit(): void {}
}

const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});

const toByteArray = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);
  reader.onload = () => resolve(new Uint8Array(reader.result as ArrayBuffer));
  reader.onerror = error => reject(error);
});
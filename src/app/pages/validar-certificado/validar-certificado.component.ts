import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CertificadoService } from 'src/app/services/certificado.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-validar-certificado',
  templateUrl: './validar-certificado.component.html',
  styleUrls: ['./validar-certificado.component.scss']
})
export class ValidarCertificadoComponent implements OnInit {

  dataCertificado: any;
  certificadoValido: boolean = false;
  mensagem: string = '';

  public formCadastro = new FormGroup({
    codigo: new FormControl(null, Validators.required), 
  });  

  constructor(    
    private certificadoService:CertificadoService,
    private loginService: LoginService,
    private toast: ToastrService,) {

     }

  validarCertificado(){
     this.certificadoService.validarCertificado(this.formCadastro.get('codigo').value).subscribe({
       next: (res:any) => {
        if(res.certificado.length > 0){
          this.dataCertificado = res.certificado[0];
          this.certificadoValido = true;
          this.mensagem = res.message;
          this.toast.success(res.message);
        }else{
          this.certificadoValido = false;
          this.mensagem = "Código de validação não encontrado!";
          this.toast.error(this.mensagem);
        }
       },
       error: (err:any) => {
        this.mensagem = err.message;
        this.toast.error(err.message);
        this.certificadoValido = false;
        }
     });
  }

  ngOnInit(): void {
  }

}

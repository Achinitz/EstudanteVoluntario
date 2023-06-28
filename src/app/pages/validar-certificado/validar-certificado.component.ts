import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CertificadoService } from 'src/app/services/certificado.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-validar-certificado',
  templateUrl: './validar-certificado.component.html',
  styleUrls: ['./validar-certificado.component.scss']
})
export class ValidarCertificadoComponent implements OnInit {

  public formCadastro = new FormGroup({
    codigo: new FormControl(null, Validators.required), 
  });  

  constructor(    
    private certificadoService:CertificadoService,
    private loginService: LoginService) {

     }

  validarCertificado(){
     this.certificadoService.validarCertificado(this.formCadastro.get('codigo').value).subscribe({
       next: (res:any) => {
         console.log(res);
       },
       error: (err:any) => {
         console.log(err);
        }
     });
  }

  ngOnInit(): void {
  }

}

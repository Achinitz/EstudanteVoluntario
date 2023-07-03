import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/models/usuario.model';
import { CertificadoService } from 'src/app/services/certificado.service';
import { DataService } from 'src/app/services/data.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-modal-certificado',
  templateUrl: './modal-certificado.component.html',
  styleUrls: ['./modal-certificado.component.scss'],
})
export class ModalCertificadoComponent implements OnInit {
  @Input() certificado: any;
  usuarioLogado: Usuario;


  constructor(  
    public activeModal: NgbActiveModal,
    private certificadoService: CertificadoService,
    private loginService: LoginService
  ) {}

  downloadCertificado(idCertificado: string) {
    this.certificadoService.getCertificado(this.usuarioLogado._id,idCertificado).subscribe({
      next: (res:any) => {
        var blob = new Blob([res], { type: 'application/pdf' });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'Certificado.pdf';
        document.body.appendChild(link);
        link.click();
      },
      error: (err:any) => {
        console.log(err);       
      }
    });
    
  }

  ngOnInit(): void {}
}

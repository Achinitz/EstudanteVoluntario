import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import { ModalCertificadoComponent } from './modal-certificado/modal-certificado.component';
import { CertificadoService } from 'src/app/services/certificado.service';
import { Usuario } from 'src/app/models/usuario.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-certificado',
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.scss'],
})
export class CertificadoComponent implements OnInit {
  
  certificados: any;
  usuarioLogado: Usuario;

  constructor(
    private modalService: NgbModal,
    public dialog: MatDialog,
    private router: Router,
    private data: DataService,
    private certificadoService:CertificadoService,
    private loginService: LoginService
  ) {
    this.usuarioLogado = this.loginService.usuarioLogado;
    this.certificadoService.listarCertificados(this.usuarioLogado._id).subscribe({
      next: (res:any) => {
        this.certificados = res.certificado;
        console.log(res.certificado);
      },
      error: (err:any) => {
        console.log(err);
      }
    });
  }

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
        // this.toast.('DEU ERRO NO BAIXAR ARQUIVOS :( ' + err);
      }
    });
      //fazer a função do certificado no back
  }

  visualizarCertificado(certificado: any) {
    const modalRef = this.modalService.open(ModalCertificadoComponent, {
      windowClass: 'auto',
      backdrop: 'static',
      centered: true,
    });
    modalRef.componentInstance.certificado = certificado;
  }

  ngOnInit(): void {}
}

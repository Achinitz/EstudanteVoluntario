import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import { ModalCertificadoComponent } from './modal-certificado/modal-certificado.component';
import { CertificadoService } from 'src/app/services/certificado.service';

@Component({
  selector: 'app-certificado',
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.scss'],
})
export class CertificadoComponent implements OnInit {
  certificados: any = [
    {
      nomeVaga: 'Recreador',
      nomeEntidade: 'Associação dos Amigos do Hospital de Clínicas',
      nomeEstudante: '',
      dataInicio: '02/12/2022',
      dataFim: '02/12/2022',
      cargaHoraria: 3,  
    },
    {
      nomeVaga: 'Recreador',
      nomeEntidade: 'Associação dos Amigos do Hospital de Clínicas',
      dataInicio: '02/12/2022',
      dataFim: '02/12/2022',
      cargaHoraria: 3,
    },
    {
      nomeVaga: 'Recreador',
      nomeEntidade: 'Associação dos Amigos do Hospital de Clínicas',
      dataInicio: '02/12/2022',
      dataFim: '02/12/2022',
      cargaHoraria: 3,
    },
    {
      nomeVaga: 'Recreador',
      nomeEntidade: 'Associação dos Amigos do Hospital de Clínicas',
      dataInicio: '02/12/2022',
      dataFim: '02/12/2022',
      cargaHoraria: 3,
    },
  ];

  constructor(
    private modalService: NgbModal,
    public dialog: MatDialog,
    private router: Router,
    private data: DataService,
    private certificadoService:CertificadoService
  ) {}

  downloadCertificado(certificado: any) {
    this.certificadoService.getCertificado().subscribe({
      next: (res:any) => {
        var blob = new Blob([res], { type: 'application/pdf' });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'MeuPDF.pdf';
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

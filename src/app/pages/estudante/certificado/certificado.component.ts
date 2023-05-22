import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import { ModalCertificadoComponent } from './modal-certificado/modal-certificado.component';

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
    private data: DataService
  ) {}

  downloadCertificado(certificado: any) {
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

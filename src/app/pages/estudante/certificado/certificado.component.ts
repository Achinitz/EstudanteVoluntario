import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import { ModalCertificadoComponent } from './modal-certificado/modal-certificado.component';

@Component({
  selector: 'app-certificado',
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.scss']
})
export class CertificadoComponent implements OnInit {

  certificados: any = [
    {
      vaga: 'Recreador',
      entidade: 'Amigos do HC',
      data: '02/12/2022',
      horas: 3,
    },
    {
      vaga: 'Recreador',
      entidade: 'Amigos do HC',
      data: '02/12/2022',
      horas: 3,
    },
    {
      vaga: 'Recreador',
      entidade: 'Amigos do HC',
      data: '02/12/2022',
      horas: 3,
    },
    {
      vaga: 'Recreador',
      entidade: 'Amigos do HC',
      data: '02/12/2022',
      horas: 3,
    },
  ];

  constructor(private modalService: NgbModal, public dialog: MatDialog,
    private router: Router, private data: DataService) { }

  downloadCertificado(certificado:any){

  }

  visualizarCertificado(certificado:any){
    const modalRef = this.modalService.open(ModalCertificadoComponent, { windowClass: 'auto', backdrop: 'static', centered: true });
    modalRef.componentInstance.certificado = certificado;
  }

  ngOnInit(): void {
  }

}

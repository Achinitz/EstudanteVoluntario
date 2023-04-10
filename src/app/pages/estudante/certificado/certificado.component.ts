import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}

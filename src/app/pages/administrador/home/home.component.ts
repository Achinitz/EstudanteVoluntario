import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Usuario } from 'src/app/models/usuario.model';
import { AdministradorService } from 'src/app/services/administrador.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('meuCanvas', { static: true }) elemento: ElementRef;

  usuarioLogado: Usuario;
  listaVagas: any;
  listaEstudantes: any;
  listaEntidades: any;

  vagasAprovacao: number;
  entidadesAprovacao: number;
  estudantesAprovacao: number;

  chart1: any;
  chart2: any;
  chart3: any;
  dataEntidade = [
    { mes: 'Dez/22', count: 0 },
    { mes: 'Jan', count: 2 },
    { mes: 'Fev', count: 8 },
    { mes: 'Mar', count: 10 },
    { mes: 'Abr', count: 6 },
    { mes: 'Mai/23', count: 6 },
  ];

  dataEstudante = [
    { mes: 'Dez/22', count: 3 },
    { mes: 'Jan', count: 10 },
    { mes: 'Fev', count: 5 },
    { mes: 'Mar', count: 8 },
    { mes: 'Abr', count: 9 },
    { mes: 'Mai/23', count: 3 },
  ];

  constructor(
    private loginService: LoginService,
    private adminService: AdministradorService
  ) {}

  ngOnInit() {
    this.usuarioLogado = this.loginService.usuarioLogado;
    this.chart1 = document.getElementById('graficoEntidades');
    this.chart2 = document.getElementById('graficoEstudantes');

    Chart.register(...registerables);
    this.loadChart1();
    this.loadChart2();

    this.adminService.listarVagas()   
    .subscribe({
      next: (res: any) => {      
        this.listaVagas= res.vagas;
        this.vagasAprovacao = this.listaVagas.length;
      }
    });

    this.adminService.listarEntidades()  
    .subscribe({
      next: (res: any) => {   
        this.listaEntidades = res.entidades;
        this.entidadesAprovacao = this.listaEntidades.length;
      }
    });

    this.adminService.listarEstudantes()  
    .subscribe({
      next: (res: any) => {
        this.listaEstudantes= res.estudantes;
        this.estudantesAprovacao = this.listaEstudantes.length;
      }
    });
  }

  loadChart1() {
    new Chart(this.chart1, {
      type: 'line',
      data: {
        datasets: [
          {
            data: this.dataEntidade.map((row) => row.count),
            label: 'Entidades',
            backgroundColor: '#7c68ee',
            tension: 0.2,
            borderColor: '#7c68ee',
          },
        ],
        labels: this.dataEntidade.map((row) => row.mes),
      },
      options: {
        responsive: true,
      },
    });
  }

  loadChart2() {
    new Chart(this.chart2, {
      type: 'line',
      data: {
        datasets: [
          {
            data: this.dataEstudante.map((row) => row.count),
            label: 'Estudantes',
            backgroundColor: '#008b8b',
            tension: 0.2,
            borderColor: '#008b8b',
          },
        ],
        labels: this.dataEntidade.map((row) => row.mes),
      },
      options: {
        responsive: true,
      },
    });
  }
}

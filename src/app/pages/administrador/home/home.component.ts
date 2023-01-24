import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild("meuCanvas", {static: true}) elemento: ElementRef;

  chart:any;

  constructor() { }

  ngOnInit(){
    this.chart = document.getElementById('graficoVagas');
    Chart.register(...registerables);
    this.loadChart();
  }

  loadChart(){
    new Chart(this.chart, {
      type: 'line',
      data: {
        datasets: [{
          data:[0,2,3,4,5,6,7,8,9,10,0,0],
          label: 'vagas preenchidas no ano de 2022',
          backgroundColor: '#007bff',
          tension: 0.2,
          borderColor: '#007bff',
        }],
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      },
      options: {
          plugins: {
            legend: {
              display: false
            }
          },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            grid: {
              tickBorderDash: [1,2]
            },
            beginAtZero: true,
            //display: false
          },
          x: {
            //display: false
            grid: {
              
            }
          }
        }
      }
    })
  }

}

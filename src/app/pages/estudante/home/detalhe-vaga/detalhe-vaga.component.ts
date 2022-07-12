import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detalhe-vaga',
  templateUrl: './detalhe-vaga.component.html',
  styleUrls: ['./detalhe-vaga.component.scss']
})
export class DetalheVagaComponent implements OnInit {

  public data: any;

  constructor(private dataService: DataService) { 
    this.data = this.dataService.data;
  }

  ngOnInit(): void {
  }

}

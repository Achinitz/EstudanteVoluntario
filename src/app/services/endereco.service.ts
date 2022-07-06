import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  private url = 'servicodados.ibge.gov.br/api/v1/localidades/distritos';

  constructor(protected http: HttpClient) { 
  }

  getEstados(){
  this.http.get(this.url).subscribe(
    (res: any) => {

    },
    error => {
      
    }
  )
  }

}

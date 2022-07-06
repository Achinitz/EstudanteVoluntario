import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  url = 'viacep.com.br/ws/' + 82960020 + '/json/';

  constructor(protected http: HttpClient) {

  }

  getDataCep(cep?:any){
    this.http.get(this.url).subscribe(
      (res:any) => {
        console.log(res);
      }
    );
  }

}

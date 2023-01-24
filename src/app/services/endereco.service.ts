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
    return this.http.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`);
  }

  getCidades(idUF:any){
    return this.http.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idUF}/municipios`);
  }

  // getBairros(idMunicipio: any){
  //   return this.http.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idUF}/municipios`);
  // }

}

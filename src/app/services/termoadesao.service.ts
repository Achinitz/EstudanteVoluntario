import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaderService } from './http-header.service';

@Injectable({
  providedIn: 'root',
})
export class TermoadesaoService extends HttpHeaderService {
  constructor(protected http: HttpClient) {
    super();
  }

  public gerarTermoAdesao(idUsuarioEnt: string, idInscricao:string) {
    return this.http.post(
      this.baseUrl + `termo/${idUsuarioEnt}/${idInscricao}`,    
      this.httpOptions
    );
  }

  public getTermoAdesao(idUsuarioEst: string, idTermo:string) {
    return this.http.get(
      this.baseUrl + `termo/${idUsuarioEst}/${idTermo}`,    
      this.httpOptions
    );
  }
}

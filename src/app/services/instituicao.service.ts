import { Injectable } from '@angular/core';
import { Instituicao } from '../models/instituicao';
import { HttpHeaderService } from './http-header.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InstituicaoService extends HttpHeaderService {
  constructor(protected http: HttpClient) {
    super();
  }

  public listarIes(): Observable<any> {
    return this.http.get(this.baseUrl + 'ies', this.httpOptions);
  }

  public cadastrarInstituicao(instituicao: Instituicao) {
    return this.http.post(this.baseUrl + 'ies', instituicao, this.httpOptions);
  }

  public visualizarInstituicao(idInstituicao: string): Observable<any> {
    return this.http.get(
      this.baseUrl + `ies/${idInstituicao}`,
      this.httpOptions
    );
  }

  /*  ARRUMAR NO BACK   
  public editarInstituicao(idInstituicao: string, instituicao: Instituicao) {
    return this.http.patch(
      this.baseUrl + `ies/${idInstituicao}`,
      instituicao,
      this.httpOptions
    );
  } */

  /* ARRUMAR NO BACK
  public excluirInstituicao(idInstituicao: string) {
    return this.http.delete(
      this.baseUrl + `ies/${idInstituicao}`,
      this.httpOptions
    );
  } */
}

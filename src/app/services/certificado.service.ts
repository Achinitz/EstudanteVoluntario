import { Injectable } from '@angular/core';
import { HttpHeaderService } from './http-header.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService extends HttpHeaderService {
  constructor(protected http: HttpClient) {
    super();
  }

  public getCertificado(id: string, idCertificado: string): Observable<any> {
    return this.http.get(this.baseUrl + `certificado/${id}/${idCertificado}/gerarCertificado`, {responseType : 'blob'});
  }

  public listarCertificados(idUsuario: string): Observable<any> {
    return this.http.get(this.baseUrl + `certificado/${idUsuario}/listarCertificado`, this.httpOptions);
  }

  public validarCertificado(codigo:string): Observable<any>{
    return this.http.get(this.baseUrl + `certificado/${codigo}/validarCertificado`, this.httpOptions);
  }

}

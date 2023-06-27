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

  public getCertificado(): Observable<any> {
    return this.http.get(this.baseUrl + `certificado/gerarCertificado`, {responseType : 'blob'});
  }

}

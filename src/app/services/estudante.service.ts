import { Injectable } from '@angular/core';
import { Estudante } from '../models/estudante';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpHeaderService } from './http-header.service';
import { Observable } from 'rxjs';
import { Vaga } from '../models/vaga';

@Injectable({
  providedIn: 'root',
})
export class EstudanteService extends HttpHeaderService {
  constructor(protected http: HttpClient) {
    super();
  }

  public teste(){
    return this.http.get(this.baseUrl + 'admin/estudantes', this.httpOptions);
  }
  
  public getPerfilEstudante(idUsuario: string): Observable<any> {
    return this.http.get(
      this.baseUrl + `estudante/${idUsuario}`,
      this.httpOptions
    );
  }

  public setPerfilEstudante(usuario: Estudante): Observable<any> {
    return this.http.patch(
      this.baseUrl + `estudante/${usuario.id}`,
      this.httpOptions
    );
  }

  public cadastrarEstudante(cadastro: Estudante): Observable<any> {
    return this.http.post(
      this.baseUrl + 'auth/cadastro',
      cadastro,
      this.httpOptions
    );
  }

  public listarVagas(): Observable<any> {
    return this.http.get(this.baseUrl + 'estudante/vagas', this.httpOptions);
  }

  public getDetalheVaga(idVaga: string): Observable<any>{
    return this.http.get(
      this.baseUrl + `estudante/vagas/${idVaga}`,
      this.httpOptions
    );
  }


  /*  ARRUMAR FUNCAO NO BACK
  public listarInscricoes(idUsuario: string): Observable<any>{
    return this.http.get(this.baseUrl + `estudante/${idUsuario}/inscricoes`, this.httpOptions);   
  } */

  /*  ARRUMAR FUNCAO NO BACK
public inscricaoVaga(idUsuario: string, idVaga: string): Observable<any>{
  return this.http.patch(this.baseUrl + `estudante/${idUsuario}/${idVaga}`, this.httpOptions);   
} */

  /*  ARRUMAR FUNCAO NO BACK
public getDetalheInscricao(idUsuario: string, idInscricao: string): Observable<any>{
  return this.http.get(this.baseUrl + `estudante/${idUsuario}/${idInscricao}`, this.httpOptions);   
} */

  /*  ARRUMAR FUNCAO NO BACK
public cancelarInscricao(idInscricao: string): Observable<any>{
  return this.http.patch(this.baseUrl + `estudante/${idInscricao}/cancelar`, this.httpOptions);   
} */

  /*  ARRUMAR FUNCAO NO BACK
public aceitarTermo(idInscricao: string): Observable<any>{
  return this.http.patch(this.baseUrl + `estudante/${idInscricao}/aceitar`, this.httpOptions);   
} */

  /*  ARRUMAR FUNCAO NO BACK
public rescindirTermo(idInscricao: string): Observable<any>{
  return this.http.patch(this.baseUrl + `estudante/${idInscricao}/rescindir`, this.httpOptions);   
} */
} /*  ARRUMAR FUNCAO NO BACK
public listarCertificados(idUsuario: string): Observable<any>{
  return this.http.get(this.baseUrl + `estudante/${idUsuario}/certificados`, this.httpOptions);   
} */

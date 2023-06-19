import { Injectable } from '@angular/core';
import { Estudante } from '../models/estudante';
import { HttpClient } from '@angular/common/http';
import { HttpHeaderService } from './http-header.service';
import { Observable } from 'rxjs';
import { Vaga } from '../models/vaga';
import { Inscricao } from '../models/inscricao';

@Injectable({
  providedIn: 'root',
})
export class EstudanteService extends HttpHeaderService {
  constructor(protected http: HttpClient) {
    super();
  }

  public teste() {
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
      this.baseUrl + `estudante?id:${usuario._id}`,
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

  public getDetalheVaga(idVaga: string): Observable<Vaga> {
    return this.http.get(
      this.baseUrl + `estudante/vagas/${idVaga}`,
      this.httpOptions
    );
  }

  public listarInscricoes(idUsuario: string): Observable<Inscricao> {
    return this.http.get(
      this.baseUrl + `estudante/${idUsuario}/inscricoes`,
      this.httpOptions
    );
  }

  public inscricaoVaga(idUsuario: any, idVaga: string): Observable<Inscricao> {
    return this.http.patch(
      this.baseUrl + `estudante/${idUsuario}/${idVaga}`,
      this.httpOptions
    );
  }

  public cancelarInscricao(idInscricao: string): Observable<Inscricao> {
    return this.http.patch(
      this.baseUrl + `estudante/${idInscricao}/cancelar`,
      this.httpOptions
    );
  }

  /*  ARRUMAR FUNCAO NO BACK - ver se precisa
public getDetalheInscricao(idUsuario: string, idInscricao: string): Observable<any>{
  return this.http.get(this.baseUrl + `estudante/${idUsuario}/${idInscricao}`, this.httpOptions);   
} */


} /*  ARRUMAR FUNCAO NO BACK
public listarCertificados(idUsuario: string): Observable<any>{
  return this.http.get(this.baseUrl + `estudante/${idUsuario}/certificados`, this.httpOptions);   
} */

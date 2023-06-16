import { Injectable } from '@angular/core';
import { Administrador } from '../models/administrador';
import { HttpClient } from '@angular/common/http';
import { HttpHeaderService } from './http-header.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdministradorService extends HttpHeaderService {
  constructor(protected http: HttpClient) {
    super();
  }

  public getPerfilAdmin(idUsuario: string): Observable<any> {
    return this.http.get(this.baseUrl + `admin/${idUsuario}`, this.httpOptions);
  }

  public setPerfilAdmin(usuario: Administrador) {
    return this.http.patch(
      this.baseUrl + `admin/${usuario._id}`,
      usuario,
      this.httpOptions
    );
  }

  public listarEntidades(): Observable<any> {
    return this.http.get(this.baseUrl + 'admin/entidades', this.httpOptions);
  }

  public detalhesEntidade(idEntidade: string): Observable<any> {
    return this.http.get(
      this.baseUrl + `admin/entidades/${idEntidade}`,
      this.httpOptions
    );
  }

  public validarEntidade(
    idEntidade: string,
    idAdmin: string,
    formResolucao: {
      avaliacao: string;
      comentario?: string;
    }
  ): Observable<any> {
    return this.http.patch(
      this.baseUrl + `admin/entidades/${idEntidade}/${idAdmin}`,
      { formResolucao },
      this.httpOptions
    );
  }

  public listarEstudantes(): Observable<any> {
    return this.http.get(this.baseUrl + 'admin/estudantes', this.httpOptions);
  }

  public detalhesEstudante(idEstudante: string): Observable<any> {
    return this.http.get(
      this.baseUrl + `admin/estudantes/${idEstudante}`,
      this.httpOptions
    );
  }

  public validarEstudante(
    idEstudante: string,
    idAdmin: string,
    formResolucao: {
      avaliacao: string;
      comentario?: string;
    }
  ): Observable<any> {
    return this.http.patch(
      this.baseUrl + `admin/estudantes/${idEstudante}/${idAdmin}`,
      { formResolucao },
      this.httpOptions
    );
  }

  public listarVagas(): Observable<any> {
    return this.http.get(this.baseUrl + 'admin/vagas', this.httpOptions);
  }

  public detalhesVaga(idvaga: string): Observable<any> {
    return this.http.get(
      this.baseUrl + `admin/vagas/${idvaga}`,
      this.httpOptions
    );
  }

  public validarVaga(
    idVaga: string,
    idAdmin: string,
    formResolucao: {
      avaliacao: string;
      comentario?: string;
    }
  ): Observable<any> {
    return this.http.patch(
      this.baseUrl + `admin/vagas/${idVaga}/${idAdmin}`,
      { formResolucao },
      this.httpOptions
    );
  }

  public listarAdmins(): Observable<any> {
    return this.http.get(this.baseUrl + 'admin/admins', this.httpOptions);
  }

  /* NÃO PRECISOU  
 public detalhesAdmin(idAdmin: string): Observable<any> {
    return this.http.get(
      this.baseUrl + `admin/admins/${idAdmin}`,
      this.httpOptions
    );
  } */

  public promoverAdministrador(idUsuarioAvaliado: string): Observable<any> {
    return this.http.patch(this.baseUrl + `admin/${idUsuarioAvaliado}/promover`, this.httpOptions);
  }

  public rebaixarAdministrador(idUsuarioAvaliado: string, comentario: string): Observable<any> {
    return this.http.patch(this.baseUrl + `admin/${idUsuarioAvaliado}/rebaixar`, comentario, this.httpOptions);
  }
 
}

import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';
import { HttpClient } from '@angular/common/http';
import { HttpHeaderService } from './http-header.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursoService extends HttpHeaderService {
  constructor(protected http: HttpClient) {
    super();
  }

  public listarCursos(idInstituicao: string): Observable<any> {
    return this.http.get(
      this.baseUrl + `ies/${idInstituicao}/cursos`,
      this.httpOptions
    );
  }

  public cadastrarCurso(idInstituicao: string, curso: Curso) {
    return this.http.post(
      this.baseUrl + `ies/${idInstituicao}`,
      curso,
      this.httpOptions
    );
  }

  public visualizarCurso(idCurso: string): Observable<any> {
    return this.http.get(
      this.baseUrl + `ies/curso/${idCurso}`,
      this.httpOptions
    );
  }

  /*  ARRUMAR NO BACK
  public editarCurso(idCurso: string) {
    return this.http.patch(
      this.baseUrl + `ies/curso/${idCurso}`,
      this.httpOptions
    );
  } */

/*  ARRUMAR NO BACK
  public excluirCurso(idCurso: string) {
    return this.http.delete(
      this.baseUrl + `ies/curso/${idCurso}`,
      this.httpOptions
    );
  } */
}

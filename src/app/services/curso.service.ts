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
      this.baseUrl + `ies/${idInstituicao}/cadastrarcurso`,
      curso,
      this.httpOptions
    );
  }

  public excluirCurso(idCurso: string) {
    return this.http.delete(
      this.baseUrl + `ies/curso/${idCurso}`,
      this.httpOptions
    );
  }
  
}

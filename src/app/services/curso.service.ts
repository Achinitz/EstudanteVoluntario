import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';
import { HttpClient } from '@angular/common/http';
import { HttpHeaderService } from './http-header.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService extends HttpHeaderService{

  constructor(protected http: HttpClient) {
    super();
  }

  public buscarCurso(idcurso: number):Curso{
    let curso: Curso;

    return curso;
  }

  public cadastrarCurso(curso: Curso){

  }

  public listarCursos(idInstituicao: string):Observable<any>{
    return this.http.get(this.baseUrl + `ies/${idInstituicao}/cursos`, this.httpOptions);
  }

  public editarCurso(idCurso: number){

  }

  public excluirCurso(idCurso: number){

  }

}

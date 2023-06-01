import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor() { }

  public buscarCurso(idcurso: number):Curso{
    let curso: Curso;

    return curso;
  }

  public cadastrarCurso(curso: Curso){

  }

  public editarCurso(idCurso: number){

  }

  public excluirCurso(idCurso: number){

  }

}

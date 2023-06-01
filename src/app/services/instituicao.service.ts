import { Injectable } from '@angular/core';
import { Instituicao } from '../models/instituicao';

@Injectable({
  providedIn: 'root'
})
export class InstituicaoService {

  constructor() { }

  public cadastrarInstituicao(instituicao: Instituicao){

  }

  public visualizarInstituicao(idInstituicao: number):Instituicao{
    let instituicao: Instituicao;

    return instituicao;
  }

  public editarInstituicao(idInstituicao: number):Instituicao{

    let instituicao: Instituicao;

    return instituicao;
  }

  public excluirInstituicao(){
    
  }

}

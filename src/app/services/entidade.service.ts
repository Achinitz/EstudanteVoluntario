import { Injectable } from '@angular/core';
import { Entidade } from '../models/entidade';

@Injectable({
  providedIn: 'root'
})
export class EntidadeService {

  constructor() { }

  public editarDadosEntidade(entidade: Entidade){

  }
  public validarEntidade(cnpj: string, comentario: string){

  }
  public buscarEntidade(cnpj: string):Entidade{

    let entidade:Entidade;

    return entidade;
        
  }
  public cadastrarEntidade(entidade: Entidade){

  }
  public editarEntidade(entidade: Entidade){

  }
  public excluirEntidade(idEntidade: number){

  }
}

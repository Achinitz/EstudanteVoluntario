import { Injectable } from '@angular/core';
import { Entidade } from '../models/entidade';
import { HttpHeaderService } from './http-header.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntidadeService extends HttpHeaderService{

  constructor(protected http: HttpClient) {
    super();
  }

  public editarDadosEntidade(entidade: Entidade){

  }
  public validarEntidade(cnpj: string, comentario: string){

  }
  public buscarEntidade(cnpj: string):Entidade{

    let entidade:Entidade;

    return entidade;
        
  }
  public cadastrarEntidade(cadastro: Entidade){
    return this.http.post(this.baseUrl + 'auth/cadastro', cadastro, this.httpOptions);
  }

  public editarEntidade(entidade: Entidade){

  }
  public excluirEntidade(idEntidade: number){

  }
}

import { Injectable } from '@angular/core';
import { Instituicao } from '../models/instituicao';
import { HttpHeaderService } from './http-header.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstituicaoService extends HttpHeaderService{

  constructor(protected http: HttpClient) {
    super();
  }
  public cadastrarInstituicao(instituicao: Instituicao){

  }

  public listarIes():Observable<any>{
    return this.http.get(this.baseUrl + 'ies', this.httpOptions);
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

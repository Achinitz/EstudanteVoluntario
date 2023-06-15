import { Injectable } from '@angular/core';
import { Vaga } from '../models/vaga';
import { HttpHeaderService } from './http-header.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VagaService extends HttpHeaderService{

  constructor(protected http: HttpClient) {
    super();
   }

  public validarVaga(idVaga:number):void{
  }

  public buscarVaga(idVaga:number):Vaga{
    let vaga: Vaga;

    return vaga;
  }

  public cancelarVaga(idVaga: number):void{

  }

  public cadastrarVaga(vaga:Vaga, idEntidade: string):Observable<any>{
    return this.http.post(this.baseUrl + `entidade/${idEntidade}/cadastrarvaga`, vaga, this.httpOptions);
  }

  public rescindirTermo(idVaga:number){

  }

  public aprovarCandidato(idVaga: number, cpfCandidato: string){

  }

  public reprovarCandidato(idVaga: number, cpfCandidato: string){

  }

  public aceitarTermo(cpf: string){
    
  }

  public downloadCertificado(cpf: string, idVaga: number){

  }

  public visualizarCertificado(cpf: string, idVaga: number){

  }

}

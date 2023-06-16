import { Injectable } from '@angular/core';
import { Entidade } from '../models/entidade';
import { HttpHeaderService } from './http-header.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from '../models/vaga';

@Injectable({
  providedIn: 'root',
})
export class EntidadeService extends HttpHeaderService {
  constructor(protected http: HttpClient) {
    super();
  }

  public cadastrarEntidade(cadastro: Entidade) {
    return this.http.post(
      this.baseUrl + 'auth/cadastro',
      cadastro,
      this.httpOptions
    );
  }

  public getPerfilEntidade(idUsuario: string): Observable<any> {
    return this.http.get(
      this.baseUrl + `entidade/${idUsuario}`,
      this.httpOptions
    );
  }

  public settPerfilEntidade(usuario: Entidade) {
    return this.http.patch(
      this.baseUrl + `entidade/${usuario._id}`,
      this.httpOptions
    );
  }

  public cadastrarVaga(idUsuario: string, vaga: Vaga) {
    return this.http.post(
      this.baseUrl + `entidade/${idUsuario}`,
      vaga,
      this.httpOptions
    );
  }

  public listarVagas(idUsuario: string): Observable<any> {
    return this.http.get(
      this.baseUrl + `entidade/${idUsuario}/vagas`,
      this.httpOptions
    );
  }

  public listarVagasAbertas(idUsuario: string): Observable<any> {
    return this.http.get(
      this.baseUrl + `entidade/${idUsuario}/vagas-abertas`,
      this.httpOptions
    );
  }

  public listarVagasAndamento(idUsuario: string): Observable<any> {
    return this.http.get(
      this.baseUrl + `entidade/${idUsuario}/vagas-andamento`,
      this.httpOptions
    );
  }

  public listarVagasAprovacao(idUsuario: string): Observable<any> {
    return this.http.get(
      this.baseUrl + `entidade/${idUsuario}/vagas-aprovacao`,
      this.httpOptions
    );
  }

  public getDetalheVaga(idUsuario: string, idVaga: string): Observable<any> {
    return this.http.get(
      this.baseUrl + `entidade/${idUsuario}/${idVaga}`,
      this.httpOptions
    );
  }

  public visualizarInscrito(
    idUsuario: string,
    idVaga: string,
    idEstudante: string
  ): Observable<any> {
    return this.http.get(
      this.baseUrl + `entidade/${idUsuario}/${idVaga}/${idEstudante}`,
      this.httpOptions
    );
  }

  public aprovarInscrito(
    idUsuario: string,
    idInscricao: string
  ): Observable<any> {
    return this.http.patch(
      this.baseUrl + `entidade/${idUsuario}/${idInscricao}/aprovar`,
      this.httpOptions
    );
  }

  public reprovarInscrito(
    idUsuario: string,
    idInscricao: string
  ): Observable<any> {
    return this.http.patch(
      this.baseUrl + `entidade/${idUsuario}/${idInscricao}/reprovar`,
      this.httpOptions
    );
  }

  public finalizarInscricaoVaga(
    idUsuario: string,
    idVaga: string
  ): Observable<any> {
    return this.http.get(
      this.baseUrl + `entidade/${idUsuario}/${idVaga}/finalizar`,
      this.httpOptions
    );
  }

  
  /*  ARRUMAR FUNCAO NO BACK
    public cancelarVaga(idUsuario: string, idVaga:string): Observable<any> {
    return this.http.get(this.baseUrl + `entidade/${idUsuario}/${idVaga}/cancelar`, this.httpOptions);
  } */
}

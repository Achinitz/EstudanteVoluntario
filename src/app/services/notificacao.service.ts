import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaderService } from './http-header.service';
import { Notificacao } from '../models/notificacao';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService  extends HttpHeaderService {

  constructor(protected http: HttpClient) { 
    super();
  }

  public listarNotificacoes(idUsuario: string): Observable<any> {
    return this.http.get(
      this.baseUrl + `notificacao/${idUsuario}`,
      this.httpOptions
    );
  }

  public excluirNotificacao(idNotificacao: string): Observable<any> {
    return this.http.delete(
      this.baseUrl + `notificacao/${idNotificacao}`,
      this.httpOptions
    );
  }
  
  public gerarNotificacao(notificacao: Notificacao): Observable<any> {
    return this.http.post(
      this.baseUrl + 'notificacao', notificacao,
      this.httpOptions
    );
  }

}

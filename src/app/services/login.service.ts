import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { Login } from '../models/login.model';
import { Perfil } from '../enums/perfil-usuario';
import { HttpHeaderService } from './http-header.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends HttpHeaderService {
  perfil: Perfil;

  LS_CHAVE: string = 'usuario';

  constructor(protected http: HttpClient) {
    super();
  }

  public get usuarioLogado(): Usuario {
    let usuario = localStorage[this.LS_CHAVE];
    return usuario ? JSON.parse(localStorage[this.LS_CHAVE]) : null;
  }

  public set usuarioLogado(usuario: Usuario){
    localStorage[this.LS_CHAVE] = JSON.stringify(usuario);
  }

  public verificarLogin(loginUsuario: any): Observable<any> {
    return this.http.get(
      this.baseUrl + 'auth/verificarLogin',
      this.httpOptions  
    );
  }

  public login(login: Login): Observable<any> {
    return this.http.post(this.baseUrl + 'auth/login', login, this.httpOptions);
  }

  public reativar(login: Login): Observable<any> {
    return this.http.patch(this.baseUrl + 'auth/reativar', login, this.httpOptions);
  }

  public desativar(idUsuario: string): Observable<any> {
    return this.http.patch(this.baseUrl + `auth/${idUsuario}/desativar`, this.httpOptions);
  }

}

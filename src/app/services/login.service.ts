import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { Login } from '../models/login.model';
import { Perfil } from '../enums/perfil-usuario';
import { HttpHeaderService } from './http-header.service';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends HttpHeaderService {
  perfil: Perfil;
  LS_CHAVE: string = 'usuario';

  constructor(
    protected http: HttpClient,
    private storageService: StorageService,    
  ) {
    super();
  }

  public get usuarioLogado(): Usuario {
    let usuario = localStorage[this.LS_CHAVE];
    return usuario ? JSON.parse(localStorage[this.LS_CHAVE]) : null;
  }

  public set usuarioLogado(usuario: Usuario) {
    localStorage[this.LS_CHAVE] = JSON.stringify(usuario);
  }

  public getToken() {
    return JSON.parse(localStorage.getItem('token'));
  }

  public getRefreshToken() {
    return JSON.parse(localStorage.getItem('refresh'));
  }

  public setTokens(tokens: any) {
    this.storageService.setData('token', tokens.token);
    this.storageService.setData('refresh', tokens.refresh);
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
    return this.http.patch(
      this.baseUrl + 'auth/reativar',
      login,
      this.httpOptions
    );
  }

  public desativar(idUsuario: string): Observable<any> {
    return this.http.patch(
      this.baseUrl + `auth/${idUsuario}/desativar`,
      this.httpOptions
    );
  }

  public esqueciSenha(login: any): Observable<any> {
    return this.http.post(
      this.baseUrl + 'auth/esqueciSenha',
      login,
      this.httpOptions
    );
  }

  public logout(): Observable<any> {
    return this.http.post(this.baseUrl + 'auth/logout', this.httpOptions);
  }

  public refreshToken(refresh: any): Observable<any> {
    const userId = this.usuarioLogado._id;
    return this.http.post(this.baseUrl + 'auth/refresh', {refresh, userId}, this.httpOptions);
  }
}

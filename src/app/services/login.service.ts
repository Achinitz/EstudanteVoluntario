import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { Login } from '../models/login.model';
import { Perfil } from '../enums/perfil-usuario';
import { HttpHeaderService } from './http-header.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService extends HttpHeaderService{

  perfil: Perfil;

  LS_CHAVE: string = "usuario";


  constructor(protected http: HttpClient) {
    super();
  }

  public get usuarioLogado():Usuario{
    let usuario = localStorage[this.LS_CHAVE];
    return (usuario ? JSON.parse(localStorage[this.LS_CHAVE]) : null);
  }

  public set usuarioLogado(usuario: Usuario){
    localStorage[this.LS_CHAVE] = JSON.stringify(usuario);
  }

  public login(login:Login): Observable<any>{    

    return this.http.post(this.baseUrl + 'auth/login',login,this.httpOptions);

    let usuario = new Usuario(1, 'Gustavo de Oliveira Achinitz', login.login, login.senha, 'Estudante');
      if(login.login == '22222222222'){
          usuario = new Usuario(1, 'Gustavo de Oliveira Achinitz', login.login, login.senha, 'Entidade');
      }else if(login.login == '33333333333'){
        usuario = new Usuario(1, 'Gustavo de Oliveira Achinitz', login.login, login.senha, 'Admin');
      }
      return of(usuario);
  }

  // login(login: any): Observable<Usuario | null>{    
  //   let usuario = new Usuario(1, 'Gustavo de Oliveira Achinitz', login.login, login.senha, 'Estudante');
  //     if(login.cpfoucnpj == '22222222222'){
  //         usuario = new Usuario(1, 'Gustavo de Oliveira Achinitz', login.login, login.senha, 'Entidade');
  //     }else if(login.cpfoucnpj == '33333333333'){
  //       usuario = new Usuario(1, 'Gustavo de Oliveira Achinitz', login.login, login.senha, 'Admin');
  //     }
  //     return of(usuario);
  // }

  logout(){
    delete localStorage['LS_CHAVE'];
  }

}

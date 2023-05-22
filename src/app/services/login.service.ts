import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { Login } from '../models/login.model';
import { PerfilUsuario } from '../enums/perfil-usuario';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  perfil: PerfilUsuario;

  LS_CHAVE: string = "usuarioLogado";


  constructor() { }

  public get usuarioLogado():Usuario{
    let usuario = localStorage[this.LS_CHAVE];
    return (usuario ? JSON.parse(localStorage[this.LS_CHAVE]) : null);
  }

  public set usuarioLogado(usuario: Usuario){
    localStorage[this.LS_CHAVE] = JSON.stringify(usuario);
  }

  login(login: any): Observable<Usuario | null>{    
    let usuario = new Usuario(1, 'Gustavo de Oliveira Achinitz', login.login, login.senha, 'Estudante');

    // if(login.login == login.senha){
      if(login.cpfoucnpj = '222.222.222-22'){
          usuario = new Usuario(1, 'Gustavo de Oliveira Achinitz', login.login, login.senha, 'Entidade');
      }else if(login.cpfoucnpj == '333.333.333-33'){
        usuario = new Usuario(1, 'Gustavo de Oliveira Achinitz', login.login, login.senha, 'Admin');
      }
      return of(usuario);
    // }else{
    //   return of(null);
    // }

  }

  logout(){
    delete localStorage['LS_CHAVE'];
  }

}

import { Injectable } from '@angular/core';
import { Administrador } from '../models/administrador';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(protected http: HttpClient){    
  }

  public teste(){
    return this.http.get(`https://localhost:3000`);
  }

  public buscarAdministrador(cpfAdministrador: number):Administrador{
    let administrador: Administrador;

    return administrador;
  }

  public editarDadosAdministrador(administrador: Administrador):void{

  }

  public cadastrarAdministrador(administrador: Administrador):void{

  }

  public bloquearAdministrador(cpfUsuario : string):void{

  }

}

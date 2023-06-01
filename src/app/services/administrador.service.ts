import { Injectable } from '@angular/core';
import { Administrador } from '../models/administrador';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

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

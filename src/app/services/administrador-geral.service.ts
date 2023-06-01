import { Injectable } from '@angular/core';
import { AdministradorService } from './administrador.service';

@Injectable({
  providedIn: 'root'
})
export class AdministradorGeralService extends AdministradorService{

  constructor() { 
    super();
  }

  public promoverAdministrador(cpfUsuario : string, cpfResponsavel : string){

  }
  public rebaixarAdministradorGeral(cpfUsuario : string, cpfResponsavel : string){

  }

}

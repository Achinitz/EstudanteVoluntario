import { Injectable } from '@angular/core';
import { Vaga } from '../models/vaga';

@Injectable({
  providedIn: 'root'
})
export class VagaService {

  constructor() { }

  public validarVaga(idVaga:number):void{
  }

  public buscarVaga(idVaga:number):Vaga{
    let vaga: Vaga;

    return vaga;
  }

  public cancelarVaga(idVaga: number):void{

  }

  public cadastrarVaga(vaga:Vaga):void{

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

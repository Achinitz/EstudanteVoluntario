import { Injectable } from '@angular/core';
import { Estudante } from '../models/estudante';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpHeaderService } from './http-header.service';

@Injectable({
  providedIn: 'root'
})

export class EstudanteService extends HttpHeaderService{

  constructor(protected http: HttpClient) {
    super();
  }

  public teste(){
    return this.http.get(this.baseUrl + 'admin/estudantes', this.httpOptions);
  }

  public editarDadosEstudante(estudante: Estudante){

  }

  public validarEstudante(){

  }

}
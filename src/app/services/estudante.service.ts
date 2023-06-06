import { Injectable } from '@angular/core';
import { Estudante } from '../models/estudante';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpHeaderService } from './http-header.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EstudanteService extends HttpHeaderService{

  constructor(protected http: HttpClient) {
    super();
  }

  public cadastrarEstudante(cadastro: Estudante): Observable<any>{
    return this.http.post(this.baseUrl + 'auth/login', cadastro, this.httpOptions);
  }

  public teste(){
    return this.http.get(this.baseUrl + 'admin/estudantes', this.httpOptions);
  }

  public editarDadosEstudante(estudante: Estudante){

  }

  public validarEstudante(){

  }

}
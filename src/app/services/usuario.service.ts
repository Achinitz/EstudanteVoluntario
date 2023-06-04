import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  baseUrl = 'http://localhost:3000/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  public login(){

  }

  // todas() {
  //   return this.http.get(this.API_URL + '/admin/usuarios');
  // }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  todas() {
    return this.http.get(this.API_URL + '/admin/usuarios');
  }
}

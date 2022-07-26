import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public usuarios: any = [];
  

  constructor(private usuarioService: UsuarioService) {
   // this.atualizarLista();
  }

atualizarLista(){
  this.usuarioService.todas()
  .subscribe(usuarios => {
    this.usuarios = usuarios;
    console.log("deu certo");
    console.log(this.usuarios);
  },()=> console.log("não foi"));
}

  ngOnInit(): void {}
}

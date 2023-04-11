import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  usuario : any = {nome: "Gustavo de Oliveira Achinitz", cpf:"111.111.111-11",perfil:"Estudante"};

  public formLogin = new FormGroup({
    cpfoucnpj: new FormControl(null,[Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$')]),
    senha: new FormControl(null, Validators.required),
  });

  constructor(private router: Router, private cookieService: CookieService) { }

  login(){

    console.log("*********************");
    console.log(this.formLogin);
    console.log("*********************");

    console.log("Entrou no login");
    if(this.formLogin.value.cpfoucnpj == '11111111111'){
      localStorage.setItem('usuario', JSON.stringify(this.usuario));
      this.router.navigate(['/Estudante']);
    }else if(this.formLogin.get('cpfoucnpj').value == '22222222222'){
      localStorage.setItem('usuario', JSON.stringify(this.usuario));
      this.router.navigate(['/Entidade']);
    }else if(this.formLogin.value.cpfoucnpj == '33333333333'){
      localStorage.setItem('usuario', JSON.stringify(this.usuario));
      this.router.navigate(['/Admin']);
    }
  }

  ngOnInit(): void {
  }

}

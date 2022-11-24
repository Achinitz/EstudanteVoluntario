import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public formLogin = new FormGroup({
    cpfoucnpj: new FormControl(null,[Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$')]),
    senha: new FormControl(null, Validators.required),
  });

  constructor(private router: Router) { }

  login(){
    console.log("Entrou no login");
    if(this.formLogin.value.cpfoucnpj.length === 11 || this.formLogin.value.cpfoucnpj.length === 14 || this.formLogin.value.cpfoucnpj == 123){
      this.router.navigate(['/Estudante']);
    }else if(this.formLogin.value.cpfoucnpj.length === 14 || this.formLogin.value.cpfoucnpj.length === 18 || this.formLogin.value.cpfoucnpj == 1234){
      this.router.navigate(['/Entidade'])
    }else if(this.formLogin.value.cpfoucnpj.length === 14 || this.formLogin.value.cpfoucnpj.length === 18 || this.formLogin.value.cpfoucnpj == 12345){
      this.router.navigate(['/Administrador'])
    }
  }

  ngOnInit(): void {
  }

}

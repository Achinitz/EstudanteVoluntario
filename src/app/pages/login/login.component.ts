import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mensagem!:string;
  loading: boolean = false;

  public formLogin = new FormGroup({
    // cpfoucnpj: new FormControl(null,[Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$')]),
    cpfoucnpj: new FormControl(null,[Validators.required]),
    senha: new FormControl(null, Validators.required),
  });

  constructor(
    private router: Router, 
    private cookieService: CookieService, 
    private loginService: LoginService,
    private route: ActivatedRoute) { 
      if(this.loginService.usuarioLogado){
        this.router.navigate(['/Home']);
      }
    }

    logar(){
      this.loading = true;
      console.log(this.formLogin.get(''))
       if(this.formLogin.valid){
        this.loginService.login(this.formLogin.value).subscribe({
          next: usuario => {            
          if(usuario != null){
            this.loginService.usuarioLogado = usuario;
            this.loading = true;           
             if(usuario.perfil == 'Estudante'){
                this.router.navigate(['/Estudante']);
              }else if(usuario.perfil == 'Entidade'){
                this.router.navigate(['/Entidade']);
              }else if(usuario.perfil == 'Admin'){
                this.router.navigate(['/Admin']);
              }
          }else{
            this.loading = false;
            this.mensagem = "Usuário/Senha inválidos.";
          }
        }})
      }
    }

  // login(){
  //   if(this.formLogin.value.cpfoucnpj == '11111111111'){
  //     localStorage.setItem('usuario', JSON.stringify(this.usuario));
  //     this.router.navigate(['/Estudante']);
  //   }else if(this.formLogin.get('cpfoucnpj').value == '22222222222'){
  //     localStorage.setItem('usuario', JSON.stringify(this.usuario));
  //     this.router.navigate(['/Entidade']);
  //   }else if(this.formLogin.value.cpfoucnpj == '33333333333'){
  //     localStorage.setItem('usuario', JSON.stringify(this.usuario));
  //     this.router.navigate(['/Admin']);
  //   }
  // }

  ngOnInit(): void {
    this.route.queryParams.subscribe({
     next:
      (params:any) => 
        this.mensagem = params['error']
    })
  }

}

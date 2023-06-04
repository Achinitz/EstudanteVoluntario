import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  LogoPath: string;
  HomePath: string;
  usuario: any;

  constructor(private router: Router, private loginService: LoginService) {
    this.LogoPath = '/assets/imagens/logo-menu.png';
    this.HomePath = '/assets/imagens/home-2.svg';
    this.usuario = this.loginService.usuarioLogado;
  }

  public get isLoggedIn() {
    let doc = this.loginService.usuarioLogado;
    return doc;
  }

  sidebarMobile() {
    if (
      document.getElementById('navSideBar').classList.contains('showSideBar')
    ) {
      document.getElementById('navSideBar').classList.remove('showSideBar');
    } else {
      document.getElementById('navSideBar').classList.add('showSideBar');
    }
  }

  redirecionar() {
    let redirecionamento = '/'+this.usuario.perfil
    this.router.navigate([redirecionamento]);
  }

  public logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  ngOnInit() {}
}

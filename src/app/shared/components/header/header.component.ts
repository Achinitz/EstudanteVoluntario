import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  LogoPath: string;
  HomePath: string;

  constructor(private router: Router) {
    this.LogoPath = '/assets/imagens/logo-menu.png';
    this.HomePath = '/assets/imagens/home-2.svg';
    
  }

  public get isLoggedIn() {
    let doc = localStorage.getItem('usuario');

    return doc;
  }

  sidebarMobile(){

    if(document.getElementById('navSideBar').classList.contains('showSideBar')){
      document.getElementById('navSideBar').classList.remove('showSideBar');
    }else{
      document.getElementById('navSideBar').classList.add('showSideBar');
    }

  }

  public logout() {
    console.log('logout')
    localStorage.clear();
    this.router.navigate(['/']);

  }

  ngOnInit() {}
}

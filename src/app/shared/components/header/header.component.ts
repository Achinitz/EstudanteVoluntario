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
    let doc = localStorage.getItem('documento');
    return doc;
  }

  public logout() {
    console.log('logout')
    localStorage.clear();
    this.router.navigate(['/']);

  }

  ngOnInit() {}
}

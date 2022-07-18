import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  LogoPath: string;
  HomePath: string;

  constructor() {
    this.LogoPath = '/assets/imagens/logo-menu.png';
    this.HomePath = '/assets/imagens/home-2.svg';
  }

  ngOnInit() {}
}

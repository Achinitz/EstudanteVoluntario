import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'sidebar-administrador',
  templateUrl: './sidebar-administrador.component.html',
  styleUrls: ['./sidebar-administrador.component.scss'],
})
export class SidebarAdministradorComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  public logout() {
    this.loginService.logout();
    localStorage.clear();
    this.router.navigate(['/']);
  }
}

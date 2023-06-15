import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-sidebar-estudante',
  templateUrl: './sidebar-estudante.component.html',
  styleUrls: ['./sidebar-estudante.component.scss'],
})
export class SidebarEstudanteComponent implements OnInit {
 

  navbarData: any = [
    {
      routerLink: 'Estudante',
      label: 'Início',
    },
    {
      routerLink: 'Perfil',
      label: 'Meu Perfil',
    },
    {
      routerLink: 'Certificado',
      label: 'Certificados',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
   
  }

  public logout() {
    console.log('logout');
    localStorage.clear();
    this.router.navigate(['/']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notificacao } from 'src/app/models/notificacao';
import { NotificacaoService } from 'src/app/services/notificacao.service';

@Component({
  selector: 'app-sidebar-estudante',
  templateUrl: './sidebar-estudante.component.html',
  styleUrls: ['./sidebar-estudante.component.scss'],
})
export class SidebarEstudanteComponent implements OnInit {
 
  notificacoes: Notificacao[] = [];

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

  constructor(private router: Router,private notificacaoService: NotificacaoService) {}

  getNotificacoes(idUsuario: string) {
    this.notificacaoService.listarNotificacoes(idUsuario).subscribe({
      next: (res: any) => {
        this.notificacoes = res;
      },
    });
  }

  ngOnInit(): void {
   
  }

  public logout() {   
    localStorage.clear();
    this.router.navigate(['/']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import { NotificacaoService } from 'src/app/services/notificacao.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  listaNotificacao: any;

  constructor(private router: Router, private notificacaoService:NotificacaoService,private loginService: LoginService,private toast: ToastrService,) { 
    this.notificacaoService.listarNotificacoes(this.loginService.usuarioLogado._id).subscribe({
      next: (res:any) => {
        this.listaNotificacao = res;
      },
      error: (err:any) => {
        this.toast.error(err.mensagem);
      }
    });
  }

  ngOnInit(): void {
  }

  public logout() {
    localStorage.clear();
    this.router.navigate(['/']);

  }

}

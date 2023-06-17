import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StatusPerfilEnum } from 'src/app/enums/status-perfil';
import { LoginService } from 'src/app/services/login.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public state = StatusPerfilEnum;

  mensagem!: string;
  loading: boolean = false;
  
  public formLogin = new FormGroup({
    // cpfoucnpj: new FormControl(null,[Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$')]),
    login: new FormControl(null, [Validators.required]),
    senha: new FormControl(null, Validators.required),
  });

  constructor(
    private router: Router,
    private loginService: LoginService,
    private storageService: StorageService,
    private route: ActivatedRoute,
    private toast: ToastrService
  ) {
    if (this.loginService.usuarioLogado) {
      this.router.navigate(['/Home']);
    }
  }

  logar() {
    this.loading = true;
    if (this.formLogin.valid) {
      this.loginService.login(this.formLogin.value).subscribe({
        next: (usuario) => {
         
          if (
            usuario.user?.statusPerfil != null &&
            usuario.user?.statusPerfil == this.state.APROVADO
          ) {
            this.loginService.usuarioLogado = usuario.user;
            this.storageService.setData('token', usuario.token);
            this.storageService.setData('refresh', usuario.refresh);
            this.loading = true;
            if (usuario.user.perfil == 'ESTUDANTE') {
              this.toast.success(usuario.message);
              this.router.navigate(['/Estudante']);
            } else if (usuario.user.perfil == 'ENTIDADE') {
              this.toast.success(usuario.message);
              this.router.navigate(['/Entidade']);
            } else if (usuario.user.perfil == 'ADMINISTRADOR' || 'ADMINISTRADORGERAL') {
              this.toast.success(usuario.message);
              this.router.navigate(['/Administrador']);
            }
          } else {
            this.loading = false;
            if (usuario.statusPerfil == this.state.PENDENTE) {
              console.log('pendente');
              this.toast.warning(usuario.message);
            } else {
              console.log('reprovado');
              this.toast.error(usuario.message);
            }
          }
        },
        error: (erro: any) => {
          this.toast.error(erro.error.message);
          this.formLogin.reset();
        },
      });
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe({
      next: (params: any) => (this.mensagem = params['error']),
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StatusPerfilEnum } from 'src/app/enums/status-perfil';
import { LoginService } from 'src/app/services/login.service';
import { StorageService } from 'src/app/services/storage.service';
import Swal from 'sweetalert2';

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
    private toast: ToastrService,
  ) {
    if (this.loginService.usuarioLogado) {
      this.router.navigate(['/Home']);
    }
  }

  logar() {
    this.loading = true;
    if (this.formLogin.valid) {
      //console.log(this.formLogin.value.login);
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
              this.toast.warning(usuario.message);
            } else if(usuario.statusPerfil == this.state.DESATIVADO){
              Swal.fire({
                title: 'Deseja realmente reativar o seu Perfil?',
                text: 'Ao confirmar, seu perfil será reativado.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirmar',
                cancelButtonText: 'Cancelar',
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: 'Perfil reativado com Sucesso!',
                    text: 'Faça o login novamente para entrar na sua conta!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500,
                  }).then(
                    () => {
                      this.loginService.reativar(this.formLogin.value).subscribe({
                        next: (res:any) => {
                          this.toast.success(res.message);
                        },
                        error: (err:any) => {
                          this.toast.error(err.message);
                        }
                      });
                    }
                  )
                }});
            }else{
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

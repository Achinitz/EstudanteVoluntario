import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { PerfilUsuario } from '../enums/perfil-usuario';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  perfil: PerfilUsuario;

  constructor(private loginService: LoginService, private router: Router, private toast: ToastrService){

  }

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
      let usuarioLogado = this.loginService.usuarioLogado;
      let url = state.url;

      if(usuarioLogado){
        if(route.data?.['role'] && route.data?.['role'].indexOf(usuarioLogado.perfil) === -1){
            this.router.navigate(['/home'],{
            queryParams: {error: 'Proibido o acesso a' + url}});
            this.toast.error('Você não pode acessar o Perfil de ' + url.substring(1).toUpperCase());
            return false;            
          }
          return true;
        }        
        this.router.navigate(['/login'], {
          queryParams: { error: 'Deve fazer o login antes de acessar ' + url }
        });
        return false;
      }
      
  }
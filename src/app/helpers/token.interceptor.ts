import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, 
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService, private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = this.loginService.getToken();
    request = this.addTokenHeader(request, token);
    return next.handle(request).pipe(
      catchError((errorData) => {
        if (errorData.status === 401) {
        return this.handleRefreshToken(request, next);        
        }
        return throwError(errorData);
      })
    );
  }

  addTokenHeader(request: HttpRequest<any>, token: any) {
    return request.clone({
      headers: request.headers.set('Authorization', `Bearer ` + token),
    });
  }

  handleRefreshToken(request: HttpRequest<any>, next: HttpHandler) {
    let refresh = this.loginService.getRefreshToken(); 
    return this.loginService.refreshToken(refresh).pipe(
      switchMap((data: any) => {
        console.log(data);
        this.loginService.setTokens(data);
        //console.log(this.loginService.setTokens(data));
        return next.handle(this.addTokenHeader(request, data.token));
      }),
      catchError(errorData=>{
        this.logout();
        return throwError(errorData);
      })
    );
  }

  logout() {
    this.loginService.logout();
    localStorage.clear();
    this.router.navigate(['/']);
  }
}

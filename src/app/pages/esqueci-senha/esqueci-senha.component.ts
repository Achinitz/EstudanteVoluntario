import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.scss'],
})
export class EsqueciSenhaComponent implements OnInit {
  constructor(private router:Router, private loginService:LoginService) {}

  public form = new FormGroup({
    login: new FormControl(null, [
      Validators.required,
      Validators.pattern('[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}'),
    ]),
  });

  ngOnInit(): void {}

  solicitarRecuperacaoSenha() {
    Swal.fire({
      title: `O link de recuperação foi enviado para o e-mail de cadastro.`,
      icon: 'success',
      showConfirmButton: false,
      timer: 3000,
    }).then(
      () => {
        this.loginService.esqueciSenha(this.form.value).subscribe({
          next: (res:any) => {

          },
          error: (err:any) => {

          }
        });
      }
    );
    this.router.navigate(['/login']);
  }
}

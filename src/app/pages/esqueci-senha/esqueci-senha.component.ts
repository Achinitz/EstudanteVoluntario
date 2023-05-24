import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.scss'],
})
export class EsqueciSenhaComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  solicitarRecuperacaoSenha() {
    Swal.fire({
      title: `O link de recuperação foi enviado para o e-mail de cadastro.`,
      icon: 'success',
      showConfirmButton: false,
      timer: 3000,
    });
    this.router.navigate(['/login']);
  }
}

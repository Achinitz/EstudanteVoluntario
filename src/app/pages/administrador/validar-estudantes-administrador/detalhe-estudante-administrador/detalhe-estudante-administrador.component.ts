import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalhe-estudante-administrador',
  templateUrl: './detalhe-estudante-administrador.component.html',
  styleUrls: ['./detalhe-estudante-administrador.component.scss'],
})
export class DetalheEstudanteAdministradorComponent implements OnInit {
  formResolucao = new FormGroup({
    resolucaoChamado: new FormControl(null, Validators.required),
    motivo: new FormControl(),
    cpf: new FormControl(null, Validators.required),
  });

  validacao: any;
  validacoes: any = [
    { id: 1, nome: 'Aprovar' },
    { id: 2, nome: 'Reprovar' },
  ];

  estudante: any;

  constructor(private data: DataService, private router: Router) {
    this.estudante = this.data.data;
    this.formResolucao.get('cpf').setValue(this.estudante.cpf);

    if (this.estudante == null) {
      this.router.navigate(['/Admin/validar-estudantes']);
    }
    console.log(this.estudante);
  }

  retornar() {
    this.router.navigate(['/Admin/validar-estudantes']);
  }

  aprovar() {
    Swal.fire({
      icon: 'success',
      title: 'Estudante aprovado com sucesso!!',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  reprovar() {
    Swal.fire({
      title: 'Deseja realmente reprovar esse cadastro?',
      text: 'Ao confirmar, esse cadastro será reprovado!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Estudante aprovado com Sucesso!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  ngOnInit(): void {}
}

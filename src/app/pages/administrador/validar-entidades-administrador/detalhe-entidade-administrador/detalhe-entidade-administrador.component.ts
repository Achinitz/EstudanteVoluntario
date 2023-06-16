import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalhe-entidade-administrador',
  templateUrl: './detalhe-entidade-administrador.component.html',
  styleUrls: ['./detalhe-entidade-administrador.component.scss'],
})
export class DetalheEntidadeAdministradorComponent implements OnInit {
  formResolucao = new FormGroup({
    resolucaoChamado: new FormControl(null, Validators.required),
    motivo: new FormControl(),
    cnpj: new FormControl(null, Validators.required),
  });

  validacao: any;
  validacoes: any = [
    { id: 1, nome: 'Aprovar' },
    { id: 2, nome: 'Reprovar' },
  ];

  entidade: any;

  constructor(
    private data: DataService,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.entidade = this.data.data;

    this.formResolucao.get('cnpj').setValue(this.entidade.cnpj);

    if (this.entidade == null) {
      this.router.navigate(['/Administrador/validar-entidades']);
    }
    console.log(this.entidade);
  }

  aprovar() {
    Swal.fire({
      icon: 'success',
      title: 'Entidade avaliada com sucesso!!',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  retornar() {
    this.router.navigate(['/Administrador/validar-entidades']);
  }

  reprovar() {
    Swal.fire({
      title: 'Deseja realmente reprovar essa Entidade?',
      text: 'Ao confirmar, essa Entidade será reprovada!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Entidade reprovada com Sucesso!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  ngOnInit(): void {}
}

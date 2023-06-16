import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Entidade } from 'src/app/models/entidade';
import { Usuario } from 'src/app/models/usuario.model';
import { AdministradorService } from 'src/app/services/administrador.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalhe-entidade-administrador',
  templateUrl: './detalhe-entidade-administrador.component.html',
  styleUrls: ['./detalhe-entidade-administrador.component.scss'],
})
export class DetalheEntidadeAdministradorComponent implements OnInit {
  usuarioLogado: Usuario;
  id: any;
  entidade: Entidade;

  formResolucao = new FormGroup({
    avaliacao: new FormControl(null, Validators.required),
    comentario: new FormControl(),
  });

  validacao: any;
  validacoes: any = [
    { id: 1, nome: 'Aprovar' },
    { id: 2, nome: 'Reprovar' },
  ];

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private administradorService: AdministradorService,
    private loginService: LoginService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.usuarioLogado = this.loginService.usuarioLogado;
    console.log(this.usuarioLogado._id);
    this.getDetalhesEntidade();
  }

  getDetalhesEntidade() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.administradorService.detalhesEntidade(this.id).subscribe({
      next: (res: any) => {
        this.entidade = res.entidade;
        console.log(this.entidade);
      },
    });
  }

  aprovar() {
    this.administradorService
      .validarEntidade(
        this.id,
        this.usuarioLogado._id,
        this.formResolucao.value
      )
      .subscribe({
        next: (res: any) => {
          Swal.fire({
            icon: 'success',
            title: res.message,
            showConfirmButton: false,
            timer: 1500,
          });
          this.router.navigate(['/Administrador/validar-entidades']);
        },
        error: (erro: any) => {
          this.toast.error(erro.error.message);
        },
      });
  }
  
  retornar() {
    this.router.navigate(['/Administrador/validar-entidades']);
  }
}

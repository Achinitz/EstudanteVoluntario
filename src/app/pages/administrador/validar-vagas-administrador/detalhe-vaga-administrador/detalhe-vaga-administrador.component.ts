import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Entidade } from 'src/app/models/entidade';
import { Usuario } from 'src/app/models/usuario.model';
import { Vaga } from 'src/app/models/vaga';
import { AdministradorService } from 'src/app/services/administrador.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalhe-vaga-administrador',
  templateUrl: './detalhe-vaga-administrador.component.html',
  styleUrls: ['./detalhe-vaga-administrador.component.scss'],
})
export class DetalheVagaAdministradorComponent implements OnInit {
  usuarioLogado: Usuario;
  id: any;
  vaga: Vaga;
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
    this.getDetalheVaga();
  }

  getDetalheVaga() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.administradorService.detalhesVaga(this.id).subscribe({
      next: (res: any) => {
        this.vaga = res.vaga[0];
        this.entidade = res.entidade;     
      },
    });
  }

  aprovar() {
    this.administradorService.validarVaga(this.id, this.usuarioLogado._id, this.formResolucao.value).subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message,
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['/Admin/validar-vagas']);
      },
      error: (erro: any) => {
        this.toast.error(erro.error.message);        
      },
    });
  }


  retornar() {
    this.router.navigate(['/Admin/validar-vagas']);
  }
}

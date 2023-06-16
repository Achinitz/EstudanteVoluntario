import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Estudante } from 'src/app/models/estudante';
import { Usuario } from 'src/app/models/usuario.model';
import { AdministradorService } from 'src/app/services/administrador.service';
import { DataService } from 'src/app/services/data.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalhe-estudante-administrador',
  templateUrl: './detalhe-estudante-administrador.component.html',
  styleUrls: ['./detalhe-estudante-administrador.component.scss'],
})
export class DetalheEstudanteAdministradorComponent implements OnInit {
  usuarioLogado: Usuario;
  id: any;
  estudante: Estudante;

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
    private data: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private administradorService: AdministradorService,
    private loginService: LoginService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.usuarioLogado = this.loginService.usuarioLogado;
    this.getDetalhesEstudante();
  }

  getDetalhesEstudante() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.administradorService.detalhesEstudante(this.id).subscribe({
      next: (res: any) => {
        this.estudante = res.estudante; 
        console.log(this.estudante);   
      },
    });
  }

  retornar() {
    this.router.navigate(['/Administrador/validar-estudantes']);
  }

  aprovar() {
    this.administradorService.validarEstudante(this.id, this.usuarioLogado._id, this.formResolucao.value).subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message,
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['/Administrador/validar-estudantes']);
      },
      error: (erro: any) => {
        this.toast.error(erro.error.message);        
      },
    });
  }
}

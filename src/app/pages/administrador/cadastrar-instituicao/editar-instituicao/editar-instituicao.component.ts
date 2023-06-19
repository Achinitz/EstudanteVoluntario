import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Instituicao } from 'src/app/models/instituicao';
import { InstituicaoService } from 'src/app/services/instituicao.service';
import { genericAnimations } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-editar-instituicao',
  templateUrl: './editar-instituicao.component.html',
  styleUrls: ['./editar-instituicao.component.scss'],
  animations: genericAnimations,
})
export class EditarInstituicaoComponent implements OnInit {
  id: any;
  instituicao: Instituicao;
  submitted = false;

  public formCadastro = new FormGroup({
    cnpj: new FormControl(null, Validators.required),
    nome: new FormControl(null, Validators.required),
    sigla: new FormControl(null, Validators.required),
    telefone: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    endereco: new FormGroup({
      cep: new FormControl(null, Validators.required),
      logradouro: new FormControl(null, Validators.required),
      numero: new FormControl(null, Validators.required),
      bairro: new FormControl(null, Validators.required),
      complemento: new FormControl(null),
      estado: new FormControl(null, Validators.required),
      cidade: new FormControl(null, Validators.required),
    }),
  });

  constructor(
    private toast: ToastrService,
    private instituicaoService: InstituicaoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getDetalhesInstituicao();
  }

  getDetalhesInstituicao() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.instituicaoService.visualizarInstituicao(this.id).subscribe({
      next: (res: any) => {
        this.instituicao = res.instituicao;
        this.formCadastro.patchValue(this.instituicao);
      },
      error: (err: any) => {
        this.toast.error(err.message);
      },
    });
  }

  editarInstituicao() {
    this.submitted = true;
    if (this.formCadastro.valid) {  
      this.instituicaoService
        .editarInstituicao(this.id, this.formCadastro.value)
        .subscribe({
          next: (res: any) => {
            this.toast.success(res.message);
            this.router.navigate(['/Administrador/cadastrar-instituicao']);
          },
          error: (err: any) => {
            this.toast.error(err.error.message);
          },
        });
    } else {
      this.toast.error(
        'Não foi possível prosseguir, verifique os campos do formulário!'
      );
    }
  }
}

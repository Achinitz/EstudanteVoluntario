import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { genericAnimations } from 'src/app/shared/animations/animations';
import { Instituicao } from 'src/app/models/instituicao';
import { ActivatedRoute } from '@angular/router';
import { InstituicaoService } from 'src/app/services/instituicao.service';
import { CursoService } from 'src/app/services/curso.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-adicionar-curso',
  templateUrl: './adicionar-curso.component.html',
  styleUrls: ['./adicionar-curso.component.scss'],
  animations: genericAnimations,
})
export class AdicionarCursoComponent implements OnInit {
  id: any;
  instituicao: Instituicao;
  nome: string;

  graus: any = [
    { id: 1, nome: 'Bacharelado' },
    { id: 2, nome: 'Licenciatura' },
    { id: 3, nome: 'Tecnológico' },
  ];

  constructor(
    private route: ActivatedRoute,
    private instituicaoService: InstituicaoService,
    private cursoService: CursoService,
    private toast: ToastrService,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.getInstituicao();
  }

  formCadastro: FormGroup = new FormGroup({
    grau: new FormControl(null, Validators.required),
    nomeCurso: new FormControl(null, Validators.required),
  });

  getInstituicao() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.instituicaoService.visualizarInstituicao(this.id).subscribe({
      next: (res: any) => {
        this.instituicao = res.instituicao;
        this.nome = this.instituicao.nome;
      },
    });
  }

 
  adicionarCurso() {
    this.cursoService
      .cadastrarCurso(this.id, this.formCadastro.value)
      .subscribe({
        next: (res:any) => {
          this.toast.success(res.message);
          this.backClicked();
        },
        error: (err:any) => {
          this.toast.error(err.error.message);
        }
      });
  }

  backClicked() {
    this._location.back();
  }
}

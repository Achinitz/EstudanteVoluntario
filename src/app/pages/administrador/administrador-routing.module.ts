import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarCursoComponent } from './cadastrar-curso/cadastrar-curso.component';
import { AdicionarInstituicaoComponent } from './cadastrar-instituicao/adicionar-instituicao/adicionar-instituicao.component';
import { CadastrarInstituicaoComponent } from './cadastrar-instituicao/cadastrar-instituicao.component';
import { HomeComponent } from './home/home.component';
import { MeuPerfilAdministradorComponent } from './meu-perfil-administrador/meu-perfil-administrador.component';
import { ValidarEntidadesAdministradorComponent } from './validar-entidades-administrador/validar-entidades-administrador.component';
import { ValidarEstudantesAdministradorComponent } from './validar-estudantes-administrador/validar-estudantes-administrador.component';
import { ValidarVagasAdministradorComponent } from './validar-vagas-administrador/validar-vagas-administrador.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent,
  },
  {
    path: "meu-perfil", component: MeuPerfilAdministradorComponent
  },
  {
    path: "validar-vagas", component: ValidarVagasAdministradorComponent
  },
  {
    path: "validar-estudantes", component: ValidarEstudantesAdministradorComponent
  },
  {
    path: "validar-entidades", component: ValidarEntidadesAdministradorComponent
  },
  {
    path: "cadastrar-instituicao", component: CadastrarInstituicaoComponent
  },
  {
    path: "cadastrar-curso", component: CadastrarCursoComponent
  },
  {
    path: "adicionar-instituicao", component: AdicionarInstituicaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }

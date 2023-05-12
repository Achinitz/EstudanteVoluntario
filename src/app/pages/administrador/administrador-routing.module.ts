import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarAdminComponent } from './cadastrar-admin/adicionar-admin.component';
import { AdministradorComponent } from './administrador.component';
import { AdicionarCursoComponent } from './cadastrar-curso/adicionar-curso/adicionar-curso.component';
import { CadastrarCursoComponent } from './cadastrar-curso/cadastrar-curso.component';
import { AdicionarInstituicaoComponent } from './cadastrar-instituicao/adicionar-instituicao/adicionar-instituicao.component';
import { CadastrarInstituicaoComponent } from './cadastrar-instituicao/cadastrar-instituicao.component';
import { DetalhesInstituicaoComponent } from './cadastrar-instituicao/detalhes-instituicao/detalhes-instituicao.component';
import { HomeComponent } from './home/home.component';
import { MeuPerfilAdministradorComponent } from './meu-perfil-administrador/meu-perfil-administrador.component';
import { DetalheEntidadeAdministradorComponent } from './validar-entidades-administrador/detalhe-entidade-administrador/detalhe-entidade-administrador.component';
import { ValidarEntidadesAdministradorComponent } from './validar-entidades-administrador/validar-entidades-administrador.component';
import { ValidarEstudantesAdministradorComponent } from './validar-estudantes-administrador/validar-estudantes-administrador.component';
import { DetalheVagaAdministradorComponent } from './validar-vagas-administrador/detalhe-vaga-administrador/detalhe-vaga-administrador.component';
import { ValidarVagasAdministradorComponent } from './validar-vagas-administrador/validar-vagas-administrador.component';
import { AdicionarAdministradorComponent } from './cadastrar-admin/adicionar-administrador/adicionar-administrador.component';
import { DetalheEstudanteAdministradorComponent } from './validar-estudantes-administrador/detalhe-estudante-administrador/detalhe-estudante-administrador.component';
import { EditarInstituicaoComponent } from './cadastrar-instituicao/editar-instituicao/editar-instituicao.component';
import { EditarCadastroComponent } from './cadastrar-curso/editar-cadastro/editar-cadastro.component';


const routes: Routes = [
  {
    path: '',
    component: AdministradorComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'meu-perfil',
        component: MeuPerfilAdministradorComponent,
      },
      {
        path: 'validar-vagas',
        component: ValidarVagasAdministradorComponent,
      },
      {
        path: 'validar-estudantes',
        component: ValidarEstudantesAdministradorComponent,
      },
      {
        path: 'validar-entidades',
        component: ValidarEntidadesAdministradorComponent,
      },
      {
        path: 'cadastrar-instituicao',
        component: CadastrarInstituicaoComponent,
      },
      {
        path: 'detalhe-instituicao',
        component: DetalhesInstituicaoComponent,
      },
      {
        path: 'cadastrar-curso',
        component: CadastrarCursoComponent,
      },
      {
        path: 'adicionar-instituicao',
        component: AdicionarInstituicaoComponent,
      },
      {
        path: 'adicionar-curso',
        component: AdicionarCursoComponent,
      },
      {
        path: 'detalhe-vaga',
        component: DetalheVagaAdministradorComponent,
      },
      {
        path: 'validar-entidade',
        component: DetalheEntidadeAdministradorComponent,
      },
      {
        path: 'validar-estudante',
        component: DetalheEstudanteAdministradorComponent,
      },      
      {
        path: 'cadastrar-admin',
        component: AdicionarAdminComponent,
      },
      {
        path: 'adicionar-admin',
        component: AdicionarAdministradorComponent,
      },
      {
        path: 'editar-instituicao',
        component: EditarInstituicaoComponent,
      },
      {
        path: 'editar-curso',
        component: EditarCadastroComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministradorRoutingModule {}

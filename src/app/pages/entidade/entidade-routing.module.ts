import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvaliarEstudanteComponent } from './avaliar-estudante/avaliar-estudante.component';
import { EntidadeComponent } from './entidade.component';
import { CadastrarVagaComponent } from './cadastrar-vaga/cadastrar-vaga.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { VagasComponent } from './vagas/vagas.component';
import { DetalhesComponent } from './vagas/detalhes/detalhes.component';
import { DetalheEstudanteComponent } from './vagas/detalhes/detalhe-estudante/detalhe-estudante.component';
import { NotificacaoComponent } from './notificacao/notificacao.component';
import { AuthGuard } from 'src/app/guards/auth-guard';
import { Pagina404Component } from '../pagina404/pagina404.component';
import { VagasAndamentoComponent } from './vagas-andamento/vagas-andamento.component';
import { VagasAbertasComponent } from './vagas-abertas/vagas-abertas.component';

const routes: Routes = [
  {
    path: '',
    component: EntidadeComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        data: {role: 'ENTIDADE'},
      },
      {
        path: 'Home',
        component: HomeComponent,
        canActivate: [AuthGuard],
        data: {role: 'ENTIDADE'},
      },
      {
        path: 'perfil',
        component: PerfilComponent,
        canActivate: [AuthGuard],
        data: {role: 'ENTIDADE'},
      },
      {
        path: 'vagas',
        component: VagasComponent,
        canActivate: [AuthGuard],
        data: {role: 'ENTIDADE'},
      },
      {
        path: 'vagas-abertas',
        component: VagasAbertasComponent,
        canActivate: [AuthGuard],
        data: {role: 'ENTIDADE'},
      },
      {
        path: 'vagas-andamento',
        component: VagasAndamentoComponent,
        canActivate: [AuthGuard],
        data: {role: 'ENTIDADE'},
      },
      {
        path: 'detalhe-vaga',
        component: DetalhesComponent,
        canActivate: [AuthGuard],
        data: {role: 'ENTIDADE'},
      },
      {
        path: 'cadastrar-vaga',
        component: CadastrarVagaComponent,
        canActivate: [AuthGuard],
        data: {role: 'ENTIDADE'},
      },      
      {
        path: 'avaliar-estudante',
        component: AvaliarEstudanteComponent,
        canActivate: [AuthGuard],
        data: {role: 'ENTIDADE'},
      },
      {
        path: 'detalhe-estudante',
        component: DetalheEstudanteComponent,
        canActivate: [AuthGuard],
        data: {role: 'ENTIDADE'},
      },
      {
        path: 'notificacoes',
        component: NotificacaoComponent,
        canActivate: [AuthGuard],
        data: {role: 'ENTIDADE'},
      },
      {
        path: '**',
        component: Pagina404Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntidadeRoutingModule {}

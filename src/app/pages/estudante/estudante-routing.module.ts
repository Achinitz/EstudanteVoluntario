import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudanteComponent } from './estudante.component';
import { CertificadoComponent } from './certificado/certificado.component';
import { DetalheVagaComponent } from './buscar-vagas/detalhe-vaga/detalhe-vaga.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BuscarVagasComponent } from './buscar-vagas/buscar-vagas.component';
import { MinhasInscricoesComponent } from './minhas-inscricoes/minhas-inscricoes.component';
import { NotificacoesComponent } from './notificacoes/notificacoes.component';
import { AuthGuard } from 'src/app/guards/auth-guard';
import { Pagina404Component } from '../pagina404/pagina404.component';

const routes: Routes = [
  {
    path: '',
    component: EstudanteComponent,

    children: [
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        data: {role: 'ESTUDANTE'},
      },
      {
        path: 'perfil',
        component: PerfilComponent,
        canActivate: [AuthGuard],
        data: {role: 'ESTUDANTE'},
      },
      {
        path: 'detalhe-vaga',
        component: DetalheVagaComponent,
        canActivate: [AuthGuard],
        data: {role: 'ESTUDANTE'},
      },
      {
        path: 'certificados',
        component: CertificadoComponent,
        canActivate: [AuthGuard],
        data: {role: 'ESTUDANTE'},
      },
      {
        path: 'buscar-vagas',
        component: BuscarVagasComponent,
        canActivate: [AuthGuard],
        data: {role: 'ESTUDANTE'},
      },
      {
        path: 'minhas-inscricoes',
        component: MinhasInscricoesComponent,
        canActivate: [AuthGuard],
        data: {role: 'ESTUDANTE'},
      },

      {
        path: 'notificacoes',
        component: NotificacoesComponent,
        canActivate: [AuthGuard],
        data: {role: 'ESTUDANTE'},
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
export class EstudanteRoutingModule {}

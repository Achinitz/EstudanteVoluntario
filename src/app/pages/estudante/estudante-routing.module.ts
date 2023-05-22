import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudanteComponent } from './estudante.component';
import { CertificadoComponent } from './certificado/certificado.component';
import { DetalheVagaComponent } from './home/detalhe-vaga/detalhe-vaga.component';
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
        data: {role: 'Estudante'},
      },
      {
        path: 'perfil',
        component: PerfilComponent,
        canActivate: [AuthGuard],
        data: {role: 'Estudante'},
      },
      {
        path: 'detalhe-vaga',
        component: DetalheVagaComponent,
        canActivate: [AuthGuard],
        data: {role: 'Estudante'},
      },
      {
        path: 'certificados',
        component: CertificadoComponent,
        canActivate: [AuthGuard],
        data: {role: 'Estudante'},
      },
      {
        path: 'buscar-vagas',
        component: BuscarVagasComponent,
        canActivate: [AuthGuard],
        data: {role: 'Estudante'},
      },
      {
        path: 'minhas-inscricoes',
        component: MinhasInscricoesComponent,
        canActivate: [AuthGuard],
        data: {role: 'Estudante'},
      },

      {
        path: 'notificacoes',
        component: NotificacoesComponent,
        canActivate: [AuthGuard],
        data: {role: 'Estudante'},
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

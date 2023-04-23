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

const routes: Routes = [
  {
    path: '',
    component: EstudanteComponent,

    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'perfil',
        component: PerfilComponent,
      },
      {
        path: 'detalhe-vaga',
        component: DetalheVagaComponent,
      },
      {
        path: 'certificados',
        component: CertificadoComponent,
      },
      {
        path: 'buscar-vagas',
        component: BuscarVagasComponent,
      },
      {
        path: 'minhas-inscricoes',
        component: MinhasInscricoesComponent,
      },

      {
        path: 'notificacoes',
        component: NotificacoesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudanteRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudanteComponent } from './estudante.component';
import { CertificadoComponent } from './certificado/certificado.component';
import { DetalheVagaComponent } from './home/detalhe-vaga/detalhe-vaga.component';
import { HomeComponent } from './home/home.component';
import { VagaDetalhesComponent } from './home/vaga-detalhes/vaga-detalhes.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MinhasInscricoesComponent } from './minhas-inscricoes/minhas-inscricoes.component';

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
        path: 'vagas',
        component: VagaDetalhesComponent,
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
        path: 'minhas-inscricoes',
        component: MinhasInscricoesComponent        
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudanteRoutingModule {}

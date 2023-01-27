import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudanteComponent } from './estudante.component';
import { CertificadoComponent } from './certificado/certificado.component';
import { DetalheVagaComponent } from './home/detalhe-vaga/detalhe-vaga.component';
import { HomeComponent } from './home/home.component';
import { VagaDetalhesComponent } from './home/vaga-detalhes/vaga-detalhes.component';
import { PerfilComponent } from './perfil/perfil.component';

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
        path: 'Perfil',
        component: PerfilComponent,
      },
      {
        path: 'Vagas',
        component: VagaDetalhesComponent,
      },
      {
        path: 'DetalheVaga',
        component: DetalheVagaComponent,
      },
      {
        path: 'Certificado',
        component: CertificadoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudanteRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvaliarEstudanteComponent } from './avaliar-estudante/avaliar-estudante.component';
import { CertificadoComponent } from './certificado/certificado.component';
import { EntidadeComponent } from './entidade.component';
import { GerarRelatorioComponent } from './gerar-relatorio/gerar-relatorio.component';
import { CadastrarVagaComponent } from './home/cadastrar-vaga/cadastrar-vaga.component';
import { DetalheVagaEntidadeComponent } from './home/detalhe-vaga-entidade/detalhe-vaga-entidade.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { VagasComponent } from './vagas/vagas.component';
import { DetalhesComponent } from './vagas/detalhes/detalhes.component';
import { DetalheEstudanteComponent } from './vagas/detalhes/detalhe-estudante/detalhe-estudante.component';
import { NotificacaoComponent } from './notificacao/notificacao.component';

const routes: Routes = [
  {
    path: '',
    component: EntidadeComponent,
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
        component: VagasComponent,
      },
      {
        path: 'detalhe-vaga',
        component: DetalhesComponent,
      },
      {
        path: 'cadastrar-vaga',
        component: CadastrarVagaComponent,
      },
      {
        path: 'gerar-relatorio',
        component: GerarRelatorioComponent,
      },
      {
        path: 'gerar-certificado',
        component: CertificadoComponent,
      },
      {
        path: 'avaliar-estudante',
        component: AvaliarEstudanteComponent,
      },
      {
        path: 'detalhe-estudante',
        component: DetalheEstudanteComponent
      },
      {
        path: 'notificacao',
        component: NotificacaoComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntidadeRoutingModule {}

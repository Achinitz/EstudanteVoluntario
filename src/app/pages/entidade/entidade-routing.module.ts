import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvaliarEstudanteComponent } from './avaliar-estudante/avaliar-estudante.component';
import { CertificadoComponent } from './certificado/certificado.component';
import { GerarRelatorioComponent } from './gerar-relatorio/gerar-relatorio.component';
import { CadastrarVagaComponent } from './home/cadastrar-vaga/cadastrar-vaga.component';

import { DetalheVagaEntidadeComponent } from './home/detalhe-vaga-entidade/detalhe-vaga-entidade.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { 
    path:"",component: HomeComponent 
  },
  { 
    path:"Perfil",component: PerfilComponent 
  },
  { 
    path:"DetalheVaga",component: DetalheVagaEntidadeComponent 
  },
  { 
    path:"cadastrar-vaga",component: CadastrarVagaComponent 
  },
  { 
    path:"gerar-relatorio",component: GerarRelatorioComponent
  },
  { 
    path:"gerar-certificado",component: CertificadoComponent
  },
  { 
    path:"avaliar-estudante",component: AvaliarEstudanteComponent
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntidadeRoutingModule { }

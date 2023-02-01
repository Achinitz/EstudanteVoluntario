import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { EntidadeRoutingModule } from './entidade-routing.module';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DetalheVagaEntidadeComponent } from './home/detalhe-vaga-entidade/detalhe-vaga-entidade.component';
import { DetalhesInscritosComponent } from './home/detalhe-vaga-entidade/detalhes-inscritos/detalhes-inscritos.component';
import { DetalheAlunoComponent } from './home/detalhe-vaga-entidade/detalhe-aluno/detalhe-aluno.component';
import { GerarRelatorioComponent } from './gerar-relatorio/gerar-relatorio.component';
import { CadastrarVagaComponent } from './home/cadastrar-vaga/cadastrar-vaga.component';
import { CertificadoComponent } from './certificado/certificado.component';
import { AvaliarEstudanteComponent } from './avaliar-estudante/avaliar-estudante.component';
import { ModalVisualizarComponent } from './avaliar-estudante/modal-visualizar/modal-visualizar.component';
import { ModalAdicionarAvaliacaoComponent } from './avaliar-estudante/modal-adicionar-avaliacao/modal-adicionar-avaliacao.component';
import { EntidadeComponent } from './entidade.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { VagasComponent } from './vagas/vagas.component';

@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    PerfilComponent,
    DetalheVagaEntidadeComponent,
    DetalhesInscritosComponent,
    DetalheAlunoComponent,
    CadastrarVagaComponent,
    GerarRelatorioComponent,
    CertificadoComponent,
    AvaliarEstudanteComponent,
    ModalVisualizarComponent,
    ModalAdicionarAvaliacaoComponent,
    EntidadeComponent,
    VagasComponent,
  ],
  imports: [
    CommonModule,
    EntidadeRoutingModule,
    FormsModule,
    MatTabsModule,
    MatDatepickerModule,
    MatPaginatorModule,
    NgbModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
  ],
})
export class EntidadeModule {}

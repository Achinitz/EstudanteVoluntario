import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { EntidadeRoutingModule } from './entidade-routing.module';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CadastrarVagaComponent } from './cadastrar-vaga/cadastrar-vaga.component';
import { EntidadeComponent } from './entidade.component';
import { VagasComponent } from './vagas/vagas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxMaskModule } from 'ngx-mask';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { DataService } from 'src/app/services/data.service';
import { DetalhesComponent } from './vagas/detalhes/detalhes.component';
import { DetalheEstudanteComponent } from './vagas/detalhes/modal-estudante/detalhe-estudante.component';
import { NotificacaoComponent } from './notificacao/notificacao.component';
import { ModalNotificacaoComponent } from './notificacao/modal-notificacao/modal-notificacao.component';
import { VagasAbertasComponent } from './vagas-abertas/vagas-abertas.component';
import { VagasAndamentoComponent } from './vagas-andamento/vagas-andamento.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    PerfilComponent,
    CadastrarVagaComponent, 
    EntidadeComponent,
    VagasComponent,
    DetalhesComponent,
    DetalheEstudanteComponent,
    NotificacaoComponent,
    ModalNotificacaoComponent,
    VagasAbertasComponent,
    VagasAndamentoComponent,
    
  ],
  imports: [
    CommonModule,
    EntidadeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    NgxMaskModule,
    MatTabsModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    SharedModule
  ],
  providers: [DataService],
})
export class EntidadeModule {}

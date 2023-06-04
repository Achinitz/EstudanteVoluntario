import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { EstudanteRoutingModule } from './estudante-routing.module';
import { HomeComponent } from './home/home.component';
import { SidebarEstudanteComponent } from './sidebar-estudante/sidebar-estudante.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DetalheVagaComponent } from './home/detalhe-vaga/detalhe-vaga.component';
import { CertificadoComponent } from './certificado/certificado.component';
import { EstudanteComponent } from './estudante.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxMaskModule } from 'ngx-mask';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { DataService } from 'src/app/services/data.service';
import { BuscarVagasComponent } from './buscar-vagas/buscar-vagas.component';
import { MinhasInscricoesComponent } from './minhas-inscricoes/minhas-inscricoes.component';
import { ModalVagaComponent } from './minhas-inscricoes/modal-inscricao/modal-vaga.component';
import { ModalCertificadoComponent } from './certificado/modal-certificado/modal-certificado.component';
import { NotificacoesComponent } from './notificacoes/notificacoes.component';
import { ModalNotificacaoComponent } from './notificacoes/modal-notificacao/modal-notificacao.component';
import { ModalTermoComponent } from './minhas-inscricoes/modal-termo/modal-termo.component';
import { EstudanteService } from 'src/app/services/estudante.service';
import { HttpHeaderService } from 'src/app/services/http-header.service';

@NgModule({
  declarations: [
    HomeComponent,
    SidebarEstudanteComponent,
    PerfilComponent,
    DetalheVagaComponent,
    CertificadoComponent,
    EstudanteComponent,
    BuscarVagasComponent,
    MinhasInscricoesComponent,
    ModalVagaComponent,
    ModalCertificadoComponent,
    NotificacoesComponent,
    ModalNotificacaoComponent,
    ModalTermoComponent,
  ],
  imports: [
    CommonModule,
    EstudanteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    NgxMaskModule,
    MatTabsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatListModule,
    MatBadgeModule,
  ],
  providers: [DataService, EstudanteService,HttpHeaderService],
})
export class EstudanteModule {}

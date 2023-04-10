import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { EstudanteRoutingModule } from './estudante-routing.module';

import { HomeComponent } from './home/home.component';
import { SidebarEstudanteComponent } from './sidebar-estudante/sidebar-estudante.component';
import { VagaDetalhesComponent } from './home/vaga-detalhes/vaga-detalhes.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CancelarModalComponent } from './home/cancelar-modal/cancelar-modal.component';
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
import { DataService } from 'src/app/services/data.service';

import { InscricoesComponent } from './inscricoes/inscricoes.component';
import { BuscarVagasComponent } from './buscar-vagas/buscar-vagas.component';

import { MinhasInscricoesComponent } from './minhas-inscricoes/minhas-inscricoes.component';
import { ModalVagaComponent } from './minhas-inscricoes/modal-vaga/modal-vaga.component';


@NgModule({
  declarations: [
    HomeComponent,
    SidebarEstudanteComponent,
    VagaDetalhesComponent,
    PerfilComponent,
    CancelarModalComponent,
    DetalheVagaComponent,
    CertificadoComponent,
    EstudanteComponent,

    InscricoesComponent,
    BuscarVagasComponent,
    
    MinhasInscricoesComponent,
    ModalVagaComponent,

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
  
  ],
  providers: [DataService],
  
})
export class EstudanteModule {}

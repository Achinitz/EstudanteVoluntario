import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudanteRoutingModule } from './estudante-routing.module';
import { HomeComponent } from './home/home.component';
import { SidebarEstudanteComponent } from './sidebar-estudante/sidebar-estudante.component';
import { VagaDetalhesComponent } from './home/vaga-detalhes/vaga-detalhes.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CancelarModalComponent } from './home/cancelar-modal/cancelar-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DetalheVagaComponent } from './home/detalhe-vaga/detalhe-vaga.component';
import { DataService } from 'src/app/services/data.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CertificadoComponent } from './certificado/certificado.component';

@NgModule({
  declarations: [
    HomeComponent,
    SidebarEstudanteComponent,
    VagaDetalhesComponent,
    PerfilComponent,
    CancelarModalComponent,
    DetalheVagaComponent,
    CertificadoComponent
  ],
  imports: [
    CommonModule,
    EstudanteRoutingModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    NgbModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  providers: [
    DataService
  ]
})
export class EstudanteModule { }

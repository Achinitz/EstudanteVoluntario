import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudanteRoutingModule } from './estudante-routing.module';
import { HomeComponent } from './home/home.component';
import { SidebarEstudanteComponent } from './sidebar-estudante/sidebar-estudante.component';
import { VagaDetalhesComponent } from './home/vaga-detalhes/vaga-detalhes.component';
import { PerfilComponent } from './perfil/perfil.component';


@NgModule({
  declarations: [
    HomeComponent,
    SidebarEstudanteComponent,
    VagaDetalhesComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    EstudanteRoutingModule
  ]
})
export class EstudanteModule { }

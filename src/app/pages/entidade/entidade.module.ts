import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntidadeRoutingModule } from './entidade-routing.module';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PerfilComponent } from './perfil/perfil.component';


@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    EntidadeRoutingModule,
    MatTabsModule
  ]
})
export class EntidadeModule { }

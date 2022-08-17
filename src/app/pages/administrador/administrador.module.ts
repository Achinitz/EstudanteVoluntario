import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
//import {MatToolbar} from '@angular/material/toolbar';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorComponent } from './administrador.component';

@NgModule({
  declarations: [AdministradorComponent],
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
  //  MatToolbar,
    CommonModule,
    AdministradorRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [],
})
export class AdministradorModule {}

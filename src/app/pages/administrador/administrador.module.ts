import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
//import {MatToolbar} from '@angular/material/toolbar';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { SidebarAdministradorComponent } from './sidebar-administrador/sidebar-administrador.component';
import { HomeComponent } from './home/home.component';
import { MeuPerfilAdministradorComponent } from './meu-perfil-administrador/meu-perfil-administrador.component';
import { ValidarVagasAdministradorComponent } from './validar-vagas-administrador/validar-vagas-administrador.component';
import { ValidarEstudantesAdministradorComponent } from './validar-estudantes-administrador/validar-estudantes-administrador.component';
import { ValidarEntidadesAdministradorComponent } from './validar-entidades-administrador/validar-entidades-administrador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetalheVagaAdministradorComponent } from './validar-vagas-administrador/detalhe-vaga-administrador/detalhe-vaga-administrador.component';
import { ValidarEstudanteModalComponent } from './validar-estudantes-administrador/validar-estudante-modal/validar-estudante-modal.component';
import { ValidarEntidadeModalComponent } from './validar-entidades-administrador/validar-entidade-modal/validar-entidade-modal.component';
import { CadastrarInstituicaoComponent } from './cadastrar-instituicao/cadastrar-instituicao.component';
import { CadastrarCursoComponent } from './cadastrar-curso/cadastrar-curso.component';
import { AdicionarInstituicaoComponent } from './cadastrar-instituicao/adicionar-instituicao/adicionar-instituicao.component';
import { NgxMaskModule } from 'ngx-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrModule } from 'ngx-toastr';
import { CnpjPipe } from 'src/app/shared/pipe/cnpj.pipe';
import { PhonePipe } from 'src/app/shared/pipe/phone.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    SidebarAdministradorComponent,
    MeuPerfilAdministradorComponent,
    ValidarVagasAdministradorComponent,
    ValidarEstudantesAdministradorComponent,
    ValidarEntidadesAdministradorComponent,
    DetalheVagaAdministradorComponent,
    ValidarEstudanteModalComponent,
    ValidarEntidadeModalComponent,
    CadastrarInstituicaoComponent,
    CadastrarCursoComponent,
    AdicionarInstituicaoComponent,
    CnpjPipe,
    PhonePipe
  ],
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    AdministradorRoutingModule,
    CommonModule,
    FormsModule,
    MatTabsModule,
    MatPaginatorModule,
    NgbModule,
    NgSelectModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    
  ],providers: [
    CnpjPipe,
    PhonePipe
  ]
})
export class AdministradorModule {}

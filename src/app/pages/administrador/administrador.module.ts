import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { SidebarAdministradorComponent } from './sidebar-administrador/sidebar-administrador.component';
import { HomeComponent } from './home/home.component';
import { MeuPerfilAdministradorComponent } from './meu-perfil-administrador/meu-perfil-administrador.component';
import { ValidarVagasAdministradorComponent } from './validar-vagas-administrador/validar-vagas-administrador.component';
import { ValidarEstudantesAdministradorComponent } from './validar-estudantes-administrador/validar-estudantes-administrador.component';
import { ValidarEntidadesAdministradorComponent } from './validar-entidades-administrador/validar-entidades-administrador.component';
import { DetalheVagaAdministradorComponent } from './validar-vagas-administrador/detalhe-vaga-administrador/detalhe-vaga-administrador.component';
import { DetalheEstudanteAdministradorComponent } from './validar-estudantes-administrador/detalhe-estudante-administrador/detalhe-estudante-administrador.component';
import { CadastrarInstituicaoComponent } from './cadastrar-instituicao/cadastrar-instituicao.component';
import { CadastrarCursoComponent } from './cadastrar-curso/cadastrar-curso.component';
import { AdicionarInstituicaoComponent } from './cadastrar-instituicao/adicionar-instituicao/adicionar-instituicao.component';
import { AdministradorComponent } from './administrador.component';
import { AdicionarCursoComponent } from './cadastrar-curso/adicionar-curso/adicionar-curso.component';
import { AdicionarAdminComponent } from './cadastrar-admin/adicionar-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrModule } from 'ngx-toastr';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { DataService } from 'src/app/services/data.service';
import { DetalhesInstituicaoComponent } from './cadastrar-instituicao/detalhes-instituicao/detalhes-instituicao.component';
import { ModalCursoComponent } from './cadastrar-curso/modal-curso/modal-curso.component';
import { AdicionarAdministradorComponent } from './cadastrar-admin/adicionar-administrador/adicionar-administrador.component';
import { DetalheEntidadeAdministradorComponent } from './validar-entidades-administrador/detalhe-entidade-administrador/detalhe-entidade-administrador.component';
import { EditarInstituicaoComponent } from './cadastrar-instituicao/editar-instituicao/editar-instituicao.component';
import { EditarCadastroComponent } from './cadastrar-curso/editar-cadastro/editar-cadastro.component';
import { AuthGuard } from 'src/app/guards/auth-guard';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    SidebarAdministradorComponent,
    MeuPerfilAdministradorComponent,
    ValidarVagasAdministradorComponent,
    ValidarEstudantesAdministradorComponent,
    ValidarEntidadesAdministradorComponent,
    DetalheVagaAdministradorComponent,
    DetalheEstudanteAdministradorComponent,
    DetalheEntidadeAdministradorComponent,
    CadastrarInstituicaoComponent,
    CadastrarCursoComponent,
    ModalCursoComponent,
    AdicionarInstituicaoComponent,
    AdministradorComponent,
    AdicionarCursoComponent,
    AdicionarAdminComponent,    
    DetalhesInstituicaoComponent,
    AdicionarAdministradorComponent,
    EditarInstituicaoComponent,
    EditarCadastroComponent,
  ],
  imports: [
    MatIconModule,
    CommonModule,
    AdministradorRoutingModule,
    CommonModule,
    FormsModule,
    NgbModule,
    NgSelectModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatTabsModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    SharedModule
  ],
  providers: [DataService, SharedModule],
})
export class AdministradorModule {}

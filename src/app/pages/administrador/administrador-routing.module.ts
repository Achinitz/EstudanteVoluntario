import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MeuPerfilAdministradorComponent } from './meu-perfil-administrador/meu-perfil-administrador.component';
import { ValidarEntidadesAdministradorComponent } from './validar-entidades-administrador/validar-entidades-administrador.component';
import { ValidarEstudantesAdministradorComponent } from './validar-estudantes-administrador/validar-estudantes-administrador.component';
import { ValidarVagasAdministradorComponent } from './validar-vagas-administrador/validar-vagas-administrador.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent,
  },
  {
    path: "meu-perfil", component: MeuPerfilAdministradorComponent
  },
  {
    path: "validar-vagas", component: ValidarVagasAdministradorComponent
  },
  {
    path: "validar-estudantes", component: ValidarEstudantesAdministradorComponent
  },
  {
    path: "validar-entidades", component: ValidarEntidadesAdministradorComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }

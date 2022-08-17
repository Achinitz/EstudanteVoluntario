import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './administrador.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',component: AdministradorComponent,
  },
  {
    path: "Perfil", component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: "", redirectTo: "/home", pathMatch: "full"
  },
  { 
    path:"home",component: HomeComponent 
  },
  { 
    path:"cadastro",component: CadastroComponent 
  },
  { 
    path:"login",component: LoginComponent 
  },
  { 
    path:"Admin", loadChildren: () => import('./pages/administrador/administrador.module').then(
      (m) => m.AdministradorModule
    ) 
  },
  { 
    path:"Estudante", loadChildren: () => import('./pages/estudante/estudante.module').then(
      (m) => m.EstudanteModule
    )
  },
  { 
    path:"Entidade", loadChildren: () => import('./pages/entidade/entidade.module').then(
      (m) => m.EntidadeModule
    )
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

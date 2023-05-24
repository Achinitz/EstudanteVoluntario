import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { EsqueciSenhaComponent } from './pages/esqueci-senha/esqueci-senha.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'esqueceu-senha',
    component: EsqueciSenhaComponent,
  },
  {
    path: 'Admin',
    loadChildren: () =>
      import('./pages/administrador/administrador.module').then(
        (m) => m.AdministradorModule
      ),
  },
  {
    path: 'Estudante',
    loadChildren: () =>
      import('./pages/estudante/estudante.module').then(
        (m) => m.EstudanteModule
      ),
  },
  {
    path: 'Entidade',
    loadChildren: () =>
      import('./pages/entidade/entidade.module').then((m) => m.EntidadeModule),
  },
  { path: '**', pathMatch: 'full', component: Pagina404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

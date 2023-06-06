import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { MatListModule } from '@angular/material/list';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { FormEntidadeComponent } from './pages/cadastro/form/form-entidade/form-entidade.component';
import { FormEstudanteComponent } from './pages/cadastro/form/form-estudante/form-estudante.component';

import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CardComponent } from './shared/components/card/card.component';
import { EntidadesComponent } from './shared/components/header/entidades/entidades.component';
import { SobreNosComponent } from './shared/components/header/sobre-nos/sobre-nos.component';
import { DataService } from './services/data.service';
import { ToastrModule } from 'ngx-toastr';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { CookieService } from 'ngx-cookie-service';
import { NgSelectModule } from '@ng-select/ng-select';
import { Pagina404Component } from './pages/pagina404/pagina404.component';
import { AuthGuard } from './guards/auth-guard';
import { EsqueciSenhaComponent } from './pages/esqueci-senha/esqueci-senha.component';
import { NomeUsuarioPipe } from './shared/pipe/nome-usuario.pipe';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    CardComponent,
    CarouselComponent,
    FooterComponent,
    FormEntidadeComponent,
    FormEstudanteComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    EntidadesComponent,
    SobreNosComponent,
    Pagina404Component,
    EsqueciSenhaComponent,
    NomeUsuarioPipe,
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    NgSelectModule,
    ToastrModule,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatIconModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    //  MatToolbar,
    NgbModule,
    NgSelectModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    DataService, 
    CookieService, 
    LoginService
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}

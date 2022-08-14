import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

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
    
  ],
  exports: [
    NgSelectModule,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTabsModule,
    NgbModule,
    NgSelectModule,
    ReactiveFormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

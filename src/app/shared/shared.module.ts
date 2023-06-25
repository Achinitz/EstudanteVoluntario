import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CnpjPipe } from './pipe/cnpj.pipe';
import { PhonePipe } from './pipe/phone.pipe';
import { CpfPipe } from './pipe/cpf.pipe';
import { NomeUsuarioPipe } from './pipe/nome-usuario.pipe';
import { LocalHourPipe } from './pipe/local-hour.pipe';
import { LocalDatePipe } from './pipe/local-date.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalDesbloqueioComponent } from './modals/modal-desbloqueio/modal-desbloqueio.component';



@NgModule({
  declarations: [
    CnpjPipe, 
    PhonePipe, 
    CpfPipe,
    NomeUsuarioPipe,
    LocalHourPipe,
    LocalDatePipe,
    ModalDesbloqueioComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CnpjPipe, 
    PhonePipe, 
    CpfPipe,
    NomeUsuarioPipe,
    LocalHourPipe,
    LocalDatePipe
  ],
  providers: [
    CnpjPipe, 
    PhonePipe, 
    CpfPipe,
    NomeUsuarioPipe,
    LocalHourPipe,
    LocalDatePipe
  ],
})
export class SharedModule { }

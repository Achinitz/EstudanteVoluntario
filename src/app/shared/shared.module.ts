import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CnpjPipe } from './pipe/cnpj.pipe';
import { PhonePipe } from './pipe/phone.pipe';
import { CpfPipe } from './pipe/cpf.pipe';
import { NomeUsuarioPipe } from './pipe/nome-usuario.pipe';
import { LocalHourPipe } from './pipe/local-hour.pipe';
import { LocalDatePipe } from './pipe/local-date.pipe';
import { ModalDesbloqueioComponent } from './modals/modal-desbloqueio/modal-desbloqueio.component';
import { LocalYearPipe } from './pipe/local-year.pipe';

@NgModule({
  declarations: [
    CnpjPipe,
    PhonePipe,
    CpfPipe,
    NomeUsuarioPipe,
    LocalHourPipe,
    LocalDatePipe,
    ModalDesbloqueioComponent,
    LocalYearPipe,
  ],
  imports: [CommonModule],
  exports: [
    CnpjPipe,
    PhonePipe,
    CpfPipe,
    NomeUsuarioPipe,
    LocalHourPipe,
    LocalDatePipe,
    LocalYearPipe,
  ],
  providers: [
    CnpjPipe,
    PhonePipe,
    CpfPipe,
    NomeUsuarioPipe,
    LocalHourPipe,
    LocalDatePipe,
    LocalYearPipe,
  ],
})
export class SharedModule {}

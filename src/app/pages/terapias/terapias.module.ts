import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerapiasComponent } from './terapias.component';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from './modal/modal.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { GraficoModule } from './grafico/grafico.module';
import { TabelaModule } from './tabela/tabela.module';
import { TerapiaService } from 'src/app/shared/services/terapia.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ModalModule,
    NgxPaginationModule,
    GraficoModule,
    TabelaModule,
  ],
  declarations: [TerapiasComponent],
  exports: [TerapiasComponent],
  providers: [TerapiaService]
})
export class TerapiasModule { }

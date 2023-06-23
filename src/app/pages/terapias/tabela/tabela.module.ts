import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaComponent } from './tabela.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    ModalModule
  ],
  declarations: [TabelaComponent],
  exports: [TabelaComponent],
})
export class TabelaModule { }

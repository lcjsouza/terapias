import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerapiasComponent } from './terapias.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [TerapiasComponent],
  exports: [TerapiasComponent]
})
export class TerapiasModule { }

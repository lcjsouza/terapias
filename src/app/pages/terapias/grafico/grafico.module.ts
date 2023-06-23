import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficoComponent } from './grafico.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GraficoComponent],
  exports: [GraficoComponent]
})
export class GraficoModule { }

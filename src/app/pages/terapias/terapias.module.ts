import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerapiasComponent } from './terapias.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [TerapiasComponent],
  exports: [TerapiasComponent]
})
export class TerapiasModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerapiasComponent } from './terapias.component';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    ModalModule
  ],
  declarations: [TerapiasComponent],
  exports: [TerapiasComponent]
})
export class TerapiasModule { }

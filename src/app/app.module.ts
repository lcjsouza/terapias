import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './pages/header/header.module';
import { FooterModule } from './pages/footer/footer.module';
import { TerapiasModule } from './pages/terapias/terapias.module';
import { ModalComponent } from './pages/terapias/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    TerapiasModule
  ],
  providers: [ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

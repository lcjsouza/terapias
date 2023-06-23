import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './pages/header/header.module';
import { FooterModule } from './pages/footer/footer.module';
import { TerapiasModule } from './pages/terapias/terapias.module';
import { ModalComponent } from './pages/terapias/modal/modal.component';
import { TerapiaService } from './shared/services/terapia.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    TerapiasModule
  ],
  providers: [ModalComponent, TerapiaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

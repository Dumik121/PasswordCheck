import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InpunVieldComponent } from './inpun-vield/inpun-vield.component';

@NgModule({
  declarations: [
    AppComponent,
    InpunVieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

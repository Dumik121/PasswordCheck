import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InpunVieldComponent } from './inpun-vield/inpun-vield.component';
import { CirclesSectionComponent } from './circles-section/circles-section.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, InpunVieldComponent, CirclesSectionComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

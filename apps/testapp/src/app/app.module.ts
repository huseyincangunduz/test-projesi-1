import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnasahifeComponent } from './anasahife/anasahife.component';
import { ReactiveFormsModule } from "@angular/forms"
@NgModule({
  declarations: [AppComponent, AnasahifeComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

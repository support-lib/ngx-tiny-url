import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxTinyUrlModule } from "ngx-tiny-url";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxTinyUrlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

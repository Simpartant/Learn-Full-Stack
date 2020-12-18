import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {ShortenPipe} from "./shorten.pipe";
import { FiltterPipe } from './filtter.pipe';
import { SortterPipe } from './sortter.pipe';
import { ReservePipe } from './reserve.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    FiltterPipe,
    SortterPipe,
    ReservePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PyramidRowComponent } from './components/pyramid-row/pyramid-row.component';
import { PyramidComponent } from './components/pyramid/pyramid.component';


@NgModule({
  declarations: [
    AppComponent,
    PyramidRowComponent,
    PyramidComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

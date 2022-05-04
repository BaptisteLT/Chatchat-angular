import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbybreedComponent } from './searchbybreed/searchbybreed.component';
import { MeowComponent } from './meow/meow.component';
import { PierreFeuilleCiseauxComponent } from './pierre-feuille-ciseaux/pierre-feuille-ciseaux.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SearchbybreedComponent,
    MeowComponent,
    PierreFeuilleCiseauxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbybreedComponent } from './searchbybreed/searchbybreed.component';
import { MeowComponent } from './meow/meow.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SearchbybreedComponent,
    MeowComponent
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

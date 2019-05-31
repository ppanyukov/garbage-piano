import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MaterialModule} from './material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RandomKeysComponent } from './random-keys/random-keys.component';

@NgModule({
  declarations: [
    AppComponent,
    ComingSoonComponent,
    RandomKeysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

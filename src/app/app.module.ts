import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SvgFaderComponent} from './components/svg-fader/svg-fader.component';
import {CssFaderComponent} from './components/css-fader/css-fader.component';

@NgModule({
  declarations: [
    AppComponent,
    CssFaderComponent,
    SvgFaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

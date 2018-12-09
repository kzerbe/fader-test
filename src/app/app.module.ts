import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SvgFaderComponent} from './components/svg-fader/svg-fader.component';
import {CssFaderComponent} from './components/css-fader/css-fader.component';
import {CanvasFaderComponent} from './components/canvas-fader/canvas-fader.component';
import {FaderService} from './services/fader_service';

@NgModule({
  declarations: [
    AppComponent,
    CssFaderComponent,
    SvgFaderComponent,
    CanvasFaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ FaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

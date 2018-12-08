import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SvgFaderComponent} from './components/svg-fader/svg-fader.component';
import {CssFaderComponent} from './components/css-fader/css-fader.component';

const routes: Routes = [
  {path: '', redirectTo: 'css-test', pathMatch: 'full'},
  {path: 'svg-test', component: SvgFaderComponent },
  {path: 'css-test', component: CssFaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {Component} from '@angular/core';
import {Fader, FaderData, FaderService} from '../../services/fader_service';
import {Observable} from 'rxjs';

@Component({
  selector: 'css-fader',
  templateUrl: 'css-fader.component.html',
  styleUrls: ['css-fader.component.scss']
})
export class CssFaderComponent {
  faders: Fader[] = [];
  needResubscribe: Observable<FaderData>;

  constructor(private faderService: FaderService) {
    this.needResubscribe = this.faderService.subscribe(faderService.samples$.subscribe(faders => {
      this.faders = faders;
    }));

    this.needResubscribe.subscribe(() => {
      this.faderService.subscribe(faderService.samples$.subscribe(faders => {
        this.faders = faders;
      }));
    })
  }
}

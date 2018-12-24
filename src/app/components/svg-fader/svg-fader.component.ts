import {Component} from '@angular/core';
import {Fader, FaderData, FaderService} from '../../services/fader_service';
import {Observable} from 'rxjs';

@Component({
  selector: 'svg-fader',
  templateUrl: 'svg-fader.component.html',
  styles: ['.pads {padding: 0 4px 0 4px;}']
})
export class SvgFaderComponent {
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

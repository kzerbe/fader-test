import {Component} from '@angular/core';
import {FaderService} from '../../services/fader_service';

@Component({
  selector: 'svg-fader',
  templateUrl: 'svg-fader.component.html',
  styles: ['.pads {padding: 0 4px 0 4px;}']
})
export class SvgFaderComponent {
  faders$ = this.faderService.faders$;

  constructor(private faderService: FaderService) {
  }
}

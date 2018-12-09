import {Component} from '@angular/core';
import {FaderService} from '../../services/fader_service';

@Component({
  selector: 'css-fader',
  templateUrl: 'css-fader.component.html',
  styles: ['.pads {padding: 4px;}']
})
export class CssFaderComponent {
  faders$ = this.faderService.faders$;

  constructor(private faderService: FaderService) {
  }
}

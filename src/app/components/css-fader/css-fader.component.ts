import {Component} from '@angular/core';
import {FaderService} from '../../services/fader_service';

@Component({
  selector: 'css-fader',
  templateUrl: 'css-fader.component.html',
  styleUrls: ['css-fader.component.scss']
})
export class CssFaderComponent {
  faders$ = this.faderService.faders$;

  constructor(private faderService: FaderService) {
  }
}

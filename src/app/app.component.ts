import {AfterViewInit, Component} from '@angular/core';
import {FaderService} from './services/fader_service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements AfterViewInit {
  faderCount = 120;
  sampleRate = 1200;

  constructor(private faderService: FaderService) {
  }

  ngAfterViewInit() {
    if (this.faderCount !== this.faderService.faderCount) {
      this.faderService.faderCount = this.faderCount;
    }
    if (this.sampleRate !== this.faderService.sampleRate) {
      this.faderService.sampleRate = this.sampleRate;
    }
  }

  onStop() {
    this.faderService.unsubscribe();
  }

  onStart() {
    this.ngAfterViewInit();
  }
}

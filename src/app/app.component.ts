import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FaderService} from './services/fader_service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements AfterViewInit {
  faderCount = 120;
  sampleRate = 1200;
  lastFaderCount = 0;

  constructor(private faderService: FaderService) {
  }

  ngAfterViewInit() {
    if (this.faderCount !== this.lastFaderCount) {
      this.faderService.init(this.faderCount);
      this.lastFaderCount = this.faderCount;
    }

    this.faderService.start(this.sampleRate);
  }

  onStop() {
    this.faderService.stop();
  }

  onStart() {
    this.ngAfterViewInit();
  }
}

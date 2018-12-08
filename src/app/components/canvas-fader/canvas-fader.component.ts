import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FaderCount, FaderService} from '../../services/fader_service';

@Component({
  selector: 'canvas-fader',
  templateUrl: 'canvas-fader.component.html',
  styles: ['.pads {padding: 0 4px 0 4px;}']
})
export class CanvasFaderComponent implements AfterViewInit {
  faders$ = this.faderService.faders$();
  contexts = {};

  constructor(private faderService: FaderService) {
  }

  ngAfterViewInit() {
    for (let id = 1; id < FaderCount + 1; ++id) {
      let cid = `can${id}`;
      let canvas: any = document.getElementById(cid);
      let ctx = canvas.getContext('2d');
      this.contexts[cid] = ctx;
      ctx.fillStyle = '#00a7e7';
      // ctx.fillRect(0, 0, 100, 16);
    }

    this.faderService.faders$().subscribe(faders => {
      for (let fader of faders) {
        let ctx = this.contexts[`can${fader.id}`];
        ctx.fillStyle = '#00a7e7';
        ctx.fillRect(0, 0, fader.value, 16);
        ctx.fillStyle = '#6e6e6e';
        ctx.fillRect(fader.value, 0, 100 - fader.value, 16);
      }
    });
  }
}

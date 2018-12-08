import {AfterViewInit, Component, HostListener} from '@angular/core';
import {FaderCount, FaderService} from '../../services/fader_service';

@Component({
  selector: 'canvas-fader',
  templateUrl: 'canvas-fader.component.html',
  styles: ['.pads {padding: 0 4px 0 4px;}']
})
export class CanvasFaderComponent implements AfterViewInit {
  faders$ = this.faderService.faders$();
  contexts = {};
  colWidth: number;
  resized = false;

  constructor(private faderService: FaderService) {
  }

  onResize(event: Event) {
    this.resized = true;
  }

  ngAfterViewInit() {
    let col = document.getElementById('can1').parentElement.getBoundingClientRect();
    this.colWidth = Math.floor(col.width - 8);
    for (let id = 1; id < FaderCount + 1; ++id) {
      let cid = `can${id}`;
      let canvas: any = document.getElementById(cid);
      let ctx = canvas.getContext('2d');
      ctx.canvas.width = this.colWidth;
      this.contexts[cid] = ctx;
    }

    this.faderService.faders$().subscribe(faders => {
      for (let fader of faders) {
        let ctx = this.contexts[`can${fader.id}`];

        if (this.resized) {
          col = document.getElementById('can1').parentElement.getBoundingClientRect();
          this.colWidth = Math.floor(col.width - 8);
          ctx.canvas.width = this.colWidth;
        }

        let w = this.colWidth * fader.value / 100;
        ctx.fillStyle = '#00a7e7';
        ctx.fillRect(0, 0, w, 16);
        ctx.fillStyle = '#6e6e6e';
        ctx.fillRect(w, 0, this.colWidth - w, 16);
      }

      this.resized = false;
    });
  }
}

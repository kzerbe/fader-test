import {AfterViewChecked, Component, OnDestroy} from '@angular/core';
import {Fader, FaderService} from '../../services/fader_service';
import {Observable, Subscription} from 'rxjs';

enum InitState {
  preInit, initNodes, ready
}

@Component({
  selector: 'canvas-fader',
  templateUrl: 'canvas-fader.component.html',
  styles: ['.pads {padding: 0 4px 0 4px;}']
})
export class CanvasFaderComponent implements AfterViewChecked, OnDestroy {
  state: InitState = InitState.preInit;
  contexts = {};
  colWidth: number;
  resized = false;
  faderCount = 0;
  faders$: Observable<Fader[]>;
  subscription: Subscription;

  constructor(private faderService: FaderService) {
    this.faders$ = faderService.faders$;
  }

  onResize(event: Event) {
    this.resized = true;
  }

  ngAfterViewChecked() {
    if (this.subscription) {
      return;
    }
    this.subscription = this.faders$.subscribe(faders => {
      if (faders.length !== this.faderCount) {
        this.contexts = {};
        this.faderCount = faders.length;
        this.state = InitState.initNodes;
        console.log('fader count changed => init canvases');
        return;
      } else if (this.state === InitState.initNodes) {
        let canvas1 = document.getElementById('can1');
        let col =  canvas1.parentElement.getBoundingClientRect();
        this.colWidth = Math.floor(col.width - 8);
        for (let id = 1; id < this.faderCount + 1; ++id) {
          let cid = `can${id}`;
          let canvas: any = document.getElementById(cid);
          let ctx = canvas.getContext('2d');
          ctx.canvas.width = this.colWidth;
          this.contexts[cid] = ctx;
        }

        this.state = InitState.ready;
        console.log(`${this.faderCount} canvases resized`)
      } else if (this.state === InitState.ready) {
        for (let fader of faders) {
          let ctx = this.contexts[`can${fader.id}`];

          if (this.resized) {
            console.log('resize canvases width');
            let canvas1 = document.getElementById('can1');
            let col =  canvas1.parentElement.getBoundingClientRect();
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
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

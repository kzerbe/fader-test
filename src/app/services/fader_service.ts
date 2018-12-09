
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

const FaderCount = 120;

export class Fader {
  id: number;
  caption: string;
  value: number;

  constructor(id: number) {
    this.id = id;
    this.caption = `Ch ${id}`;
    this.value = 0;
  }

  get id$() {
    return `can${this.id}`
  }

  get value$(): string  {
    return `${this.value}%`;
  }

  get tail$(): string {
    return `${100 - this.value}%`;
  }

  get color(): string {
    return this.value > 90 ? 'red' : '#00a7e7';
  }

}

@Injectable()
export class FaderService {
  faders: Fader[] = [];
  timer = 0;
  subject = new Subject<Fader[]>();

  constructor() {
  }

  init(faderCount = FaderCount) {
    this.faders = [];

    for (let count = 1; count < faderCount + 1; count++) {
      this.faders.push(new Fader(count));
    }
  }

  start(sampleRate: number): Observable<Fader[]> {
    this.stop();
    this.timer = setInterval(() => {
      for (let fader of this.faders) {
        fader.value = Math.round(100 * Math.random());
      }

      this.subject.next(this.faders);
    }, 60000 / sampleRate);

    return this.subject;
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = 0;
    }
  }

  get faders$(): Observable<Fader[]> {
    return this.subject;
  }

}

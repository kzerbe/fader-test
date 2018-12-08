
import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';

export const FaderCount = 120;

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

  constructor() {
    for (let count = 1; count < FaderCount + 1; count++) {
      this.faders.push(new Fader(count));
    }
  }

  faders$(): Observable<Fader[]> {
    let subject = new BehaviorSubject(this.faders);
    setInterval(() => {
      for (let fader of this.faders) {
        fader.value = Math.round(100 * Math.random());
      }
      subject.next(this.faders);
    }, 50);

    return subject;
  }

}

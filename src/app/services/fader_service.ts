
import {Injectable} from '@angular/core';
import {Observable, interval, range, Subscription, Subject} from 'rxjs';
import {mergeMapTo, map, toArray} from 'rxjs/operators';

const FaderCount = 120;
const SampleRate = 1200;

export class Fader {
  id: number;
  caption: string;
  value: number;

  constructor(id: number, value = 0) {
    this.id = id;
    this.caption = `Ch ${id}`;
    this.value = value;
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

export interface FaderData {
  count: number;
  rate: number;
}

@Injectable()
export class FaderService {
  private _faderCount = FaderCount;
  private _sampleRate = SampleRate;
  subscribed: Subscription[] = [];
  needResubscribe$ = new Subject<FaderData>();

  set faderCount(faderCount: number) {
    this._faderCount = faderCount;
    this.resubscribe();
  }

  set sampleRate(sampleRate: number) {
    this._sampleRate = sampleRate;
    this.resubscribe();
  }


  get samples$() {
    let faders$ =
      range(0, this._faderCount).pipe(
        map(id => new Fader(id,  Math.round(100 * Math.random()))),
        toArray()
      );

    return interval(60000 / this._sampleRate)
      .pipe(mergeMapTo(faders$));
  }

  subscribe(subscription: Subscription): Observable<FaderData> {
    this.subscribed.push(subscription);
    return this.needResubscribe$;
  }

  unsubscribe() {
    for (let sub of this.subscribed) {
      sub.unsubscribe();
    }
    this.subscribed = [];
  }

  resubscribe() {
    this.unsubscribe();
    this.needResubscribe$.next({count: this._faderCount, rate: this._sampleRate});
  }
}

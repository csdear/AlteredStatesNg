import { Component, signal, computed, effect } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject, map } from 'rxjs';


@Component({
  selector: 'counter',
  standalone: true, // 👈 make sure this line exists
  imports: [AsyncPipe], // 👈 import AsyncPipe for RxJS observable usage
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  // SIGNALS SECTION
  countSignal = signal(0);

  // derived signal (computed)
  doubleCountSignal = computed(() => this.countSignal() * 2);

  constructor() {
    effect(() => {
       console.log(`🛰️ Signal count: ${this.countSignal()} | Double: ${this.doubleCountSignal()}`);
    });

    // 👀 Subscribe to the RxJS BehaviorSubject to log changes
    this.count$.subscribe(value => {
      console.log(`📡 RxJS count changed to: ${value}`);
    });

    this.doubleCount$.subscribe(value => {
      console.log(`📡 RxJS double count: ${value}`);
    });
  }

  incrementSignal() { 
    this.countSignal.update(count => count + 1);
  }

  decrementSignal() { 
    this.countSignal.update(count => count - 1);
  }

  // RXJS SECTION
  private countSubject = new BehaviorSubject<number>(0);
  count$ = this.countSubject.asObservable();

   // derived observable using map
  doubleCount$ = this.count$.pipe(map(count => count * 2));

  incrementRx() {
    const current = this.countSubject.getValue();
    this.countSubject.next(current + 1);
  }

  decrementRx() {
    const current = this.countSubject.getValue();
    this.countSubject.next(current - 1);
  }
  

}

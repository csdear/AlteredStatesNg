import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true, // 👈 make sure this line exists
  imports: [],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  count = signal(0);
}

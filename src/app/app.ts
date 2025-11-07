import { Component, signal } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true, // 👈 important for standalone component
  imports: [CounterComponent], // 👈 add CounterComponent here
  templateUrl: './app.html',
  styleUrls: ['./app.scss'] // 👈 note: styleUrls (plural), not styleUrl
})
export class App {
  protected readonly title = signal('AlteredStatesNg');
}

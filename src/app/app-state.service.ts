import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  // Example state
  public readonly count = signal(0);

  public increment() {
    this.count.update(n => n + 1);
  }
}
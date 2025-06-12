import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <div class="bg-card text-card-foreground border border-border shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <div class="p-6">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class CardComponent {}
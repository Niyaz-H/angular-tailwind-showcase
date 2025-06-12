import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <div class="p-4">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class CardComponent {}
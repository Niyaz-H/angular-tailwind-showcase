import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  template: `
    <button [ngClass]="classes">
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';

  get classes() {
    return {
      'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded': this.variant === 'primary',
      'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded': this.variant === 'secondary',
    };
  }
}
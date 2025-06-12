import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  template: `
    <button [ngClass]="classes" [disabled]="disabled">
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'outline' = 'primary';
  @Input() disabled: boolean = false;

  get classes() {
    const baseClasses = 'font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variantClasses = {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary',
      outline: 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground focus:ring-ring',
    };
    const disabledClasses = 'disabled:opacity-50 disabled:cursor-not-allowed';

    return `${baseClasses} ${variantClasses[this.variant]} ${disabledClasses}`;
  }
}
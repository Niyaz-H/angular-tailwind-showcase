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
    const baseClasses = 'inline-flex items-center justify-center font-semibold px-6 py-3 rounded-xl transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background active:scale-95 shadow-sm';
    const variantClasses = {
      primary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 focus:ring-blue-500 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30',
      secondary: 'bg-secondary/80 backdrop-blur-sm text-secondary-foreground hover:bg-secondary border border-border/50 focus:ring-secondary hover:shadow-md',
      outline: 'border-2 border-border bg-transparent hover:bg-accent/50 hover:border-accent-foreground/20 focus:ring-ring text-foreground hover:text-accent-foreground backdrop-blur-sm',
    };
    const disabledClasses = 'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:shadow-none';

    return `${baseClasses} ${variantClasses[this.variant]} ${disabledClasses}`;
  }
}
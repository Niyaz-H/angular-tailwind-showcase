import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  template: `
    <input
      [type]="type"
      [placeholder]="placeholder"
      class="w-full px-4 py-3 border border-input bg-card/50 backdrop-blur-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 ease-in-out placeholder:text-muted-foreground/60 hover:border-accent-foreground/30 shadow-sm focus:shadow-md focus:shadow-blue-500/10"
    >
  `,
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
}
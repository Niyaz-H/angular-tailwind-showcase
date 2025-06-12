import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  template: `
    <input [type]="type" [placeholder]="placeholder" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out">
  `,
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
}
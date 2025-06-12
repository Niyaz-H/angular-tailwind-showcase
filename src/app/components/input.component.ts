import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  template: `
    <input [type]="type" [placeholder]="placeholder" class="border-2 border-gray-300 rounded-md p-2 w-full">
  `,
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
}
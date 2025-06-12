import { Component } from '@angular/core';

@Component({
  selector: 'app-table-toolbar',
  standalone: true,
  template: `
    <div class="flex items-center justify-between p-4 bg-card border-b border-border rounded-t-lg">
      <ng-content select="[toolbar-title]"></ng-content>
      <div class="flex items-center space-x-2">
        <ng-content select="[toolbar-actions]"></ng-content>
      </div>
    </div>
  `,
})
export class TableToolbarComponent {}
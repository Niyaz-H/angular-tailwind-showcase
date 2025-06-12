import { Component } from '@angular/core';

@Component({
  selector: 'app-table-toolbar',
  standalone: true,
  template: `
    <div class="flex items-center justify-between p-8 bg-card/50 backdrop-blur-sm border-b border-border/30 rounded-t-2xl">
      <ng-content select="[toolbar-title]"></ng-content>
      <div class="flex items-center space-x-4">
        <ng-content select="[toolbar-actions]"></ng-content>
      </div>
    </div>
  `,
})
export class TableToolbarComponent {}
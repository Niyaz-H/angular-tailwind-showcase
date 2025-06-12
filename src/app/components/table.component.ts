import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ColumnConfig<T> {
  key: keyof T | string;
  header: string;
  cellRenderer?: (item: T) => string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="overflow-x-auto bg-card border border-border rounded-lg">
      <table class="min-w-full divide-y divide-border">
        <thead class="bg-secondary">
          <tr>
            <th *ngFor="let col of columns" scope="col" class="px-6 py-3 text-left text-xs font-medium text-secondary-foreground uppercase tracking-wider">
              {{ col.header }}
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border">
          <tr *ngFor="let item of items" class="hover:bg-accent transition-colors">
            <td *ngFor="let col of columns" class="px-6 py-4 whitespace-nowrap text-sm text-foreground">
              {{ resolveValue(item, col) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
})
export class TableComponent<T> {
  @Input() items: T[] = [];
  @Input() columns!: ColumnConfig<T>[];

  resolveValue(item: T, col: ColumnConfig<T>): any {
    if (col.cellRenderer) {
      return col.cellRenderer(item);
    }
    
    if (typeof col.key === 'string' && col.key.includes('.')) {
      return col.key.split('.').reduce((acc, part) => acc && acc[part], item as any);
    }
    
    return item[col.key as keyof T];
  }
}
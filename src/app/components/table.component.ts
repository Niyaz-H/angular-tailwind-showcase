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
    <div class="overflow-hidden bg-card/50 backdrop-blur-sm rounded-b-2xl">
      <div class="overflow-x-auto">
        <table class="min-w-full">
          <thead class="bg-secondary/50 backdrop-blur-sm border-b border-border/30">
            <tr>
              <th *ngFor="let col of columns" scope="col" class="px-8 py-6 text-left text-xs font-semibold text-secondary-foreground uppercase tracking-wider">
                {{ col.header }}
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border/20">
            <tr *ngFor="let item of items; let i = index" class="hover:bg-accent/30 transition-all duration-200 ease-in-out">
              <td *ngFor="let col of columns" class="px-8 py-6 text-sm text-foreground">
                {{ resolveValue(item, col) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
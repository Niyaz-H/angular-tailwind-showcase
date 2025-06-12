import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button.component';
import { CardComponent } from './components/card.component';
import { InputComponent } from './components/input.component';
import { AppStateService } from './app-state.service';
import { ThemeService } from './theme.service';
import { TableComponent, ColumnConfig } from './components/table.component';
import { TableToolbarComponent } from './components/table-toolbar.component';
import { Project, mockProjects } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    CardComponent,
    InputComponent,
    TableComponent,
    TableToolbarComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-tailwind-showcase';
  public state = inject(AppStateService);
  themeService = inject(ThemeService);

  projects: Project[] = mockProjects;
  projectColumns: ColumnConfig<Project>[] = [
    { key: 'name', header: 'Project Name' },
    { key: 'customer.name', header: 'Customer' },
    { key: 'status', header: 'Status' },
    { key: 'deadline', header: 'Deadline' },
    {
      key: 'budget',
      header: 'Budget',
      cellRenderer: (item) => `$${item.budget.toLocaleString()}`,
    },
  ];
}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button.component';
import { CardComponent } from './components/card.component';
import { InputComponent } from './components/input.component';
import { AppStateService } from './app-state.service';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent, CardComponent, InputComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-tailwind-showcase';
  public state = inject(AppStateService);
  themeService = inject(ThemeService);
}

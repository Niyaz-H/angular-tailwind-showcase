import { Component, inject } from '@angular/core';
import { ButtonComponent } from './components/button.component';
import { CardComponent } from './components/card.component';
import { InputComponent } from './components/input.component';
import { AppStateService } from './app-state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent, CardComponent, InputComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-tailwind-showcase';
  public state = inject(AppStateService);
}

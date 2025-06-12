import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <div class="bg-card/60 backdrop-blur-sm text-card-foreground border border-border/50 shadow-lg shadow-black/5 rounded-2xl overflow-hidden transform hover:scale-[1.02] hover:shadow-xl hover:shadow-black/10 transition-all duration-300 ease-out hover:border-border/80">
      <div class="p-8">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class CardComponent {}
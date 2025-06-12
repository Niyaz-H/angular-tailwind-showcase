import { Injectable, signal, effect, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDark = signal<boolean>(false);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const storedPreference = localStorage.getItem('theme');
      if (storedPreference) {
        this.isDark.set(storedPreference === 'dark');
      } else {
        this.isDark.set(window.matchMedia('(prefers-color-scheme: dark)').matches);
      }
    }

    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('theme', this.isDark() ? 'dark' : 'light');
        if (this.isDark()) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    });
  }

  toggleTheme() {
    this.isDark.set(!this.isDark());
  }
}
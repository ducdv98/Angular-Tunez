import {
  Injectable,
  Renderer2,
  RendererFactory2,
  Inject,
  signal,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type Theme = 'light' | 'dark' | 'auto';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private readonly THEME_KEY = 'angular-tunez-theme';

  // Use signals for reactive theme management
  readonly currentTheme = signal<Theme>('auto');
  readonly isDarkMode = signal<boolean>(false);

  constructor(
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.initializeTheme();
    this.setupSystemThemeListener();
  }

  /**
   * Initialize theme from localStorage or default to 'auto'
   */
  private initializeTheme(): void {
    const savedTheme = this.getStoredTheme();
    this.applyTheme(savedTheme);
  }

  /**
   * Get stored theme from localStorage
   */
  private getStoredTheme(): Theme {
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem(this.THEME_KEY) as Theme;
      return ['light', 'dark', 'auto'].includes(stored) ? stored : 'auto';
    }
    return 'auto';
  }

  /**
   * Store theme preference in localStorage
   */
  private storeTheme(theme: Theme): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.THEME_KEY, theme);
    }
  }

  /**
   * Listen for system theme changes
   */
  private setupSystemThemeListener(): void {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

      mediaQuery.addEventListener('change', (e) => {
        if (this.currentTheme() === 'auto') {
          this.updateDarkModeState(e.matches);
        }
      });
    }
  }

  /**
   * Apply theme to the document
   */
  private applyTheme(theme: Theme): void {
    this.currentTheme.set(theme);
    this.storeTheme(theme);

    // Remove existing theme classes
    this.renderer.removeClass(this.document.documentElement, 'light');
    this.renderer.removeClass(this.document.documentElement, 'dark');

    // Set data-theme attribute
    this.renderer.setAttribute(
      this.document.documentElement,
      'data-theme',
      theme,
    );

    // Determine if dark mode should be active
    const shouldBeDark = this.shouldUseDarkMode(theme);
    this.updateDarkModeState(shouldBeDark);

    // Add appropriate class for TailwindCSS dark mode
    if (shouldBeDark) {
      this.renderer.addClass(this.document.documentElement, 'dark');
    }
  }

  /**
   * Determine if dark mode should be active based on theme setting
   */
  private shouldUseDarkMode(theme: Theme): boolean {
    switch (theme) {
      case 'dark':
        return true;
      case 'light':
        return false;
      case 'auto':
        return (
          typeof window !== 'undefined' &&
          window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
        );
      default:
        return false;
    }
  }

  /**
   * Update dark mode state signal
   */
  private updateDarkModeState(isDark: boolean): void {
    this.isDarkMode.set(isDark);
  }

  /**
   * Set theme programmatically
   */
  setTheme(theme: Theme): void {
    this.applyTheme(theme);
  }

  /**
   * Toggle between light and dark themes
   */
  toggleTheme(): void {
    const current = this.currentTheme();
    const next: Theme = current === 'dark' ? 'light' : 'dark';
    this.setTheme(next);
  }

  /**
   * Get current theme value
   */
  getTheme(): Theme {
    return this.currentTheme();
  }

  /**
   * Check if current theme is dark
   */
  isDark(): boolean {
    return this.isDarkMode();
  }

  /**
   * Get theme icon for UI
   */
  getThemeIcon(): string {
    const theme = this.currentTheme();
    switch (theme) {
      case 'light':
        return '☀️';
      case 'dark':
        return '🌙';
      case 'auto':
        return '💻';
      default:
        return '💻';
    }
  }

  /**
   * Get theme display name
   */
  getThemeDisplayName(): string {
    const theme = this.currentTheme();
    switch (theme) {
      case 'light':
        return 'Light';
      case 'dark':
        return 'Dark';
      case 'auto':
        return 'System';
      default:
        return 'System';
    }
  }
}

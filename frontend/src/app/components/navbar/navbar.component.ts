import { Component, output, input } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-navbar',
  imports: [MatIconButton, MatIconModule, NgOptimizedImage, UserComponent],
  template: `
    <div
      class="fixed top-0 left-0 right-0 z-10 bg-yt-sidebar h-navbar-height transition-transform duration-300 ease-in-out"
      [class.navbar-hidden]="!isVisible()"
      [class.navbar-scrolled]="isScrolled()"
    >
      <div class="pl-3 h-full">
        <div class="flex items-center justify-between h-full">
          <div class="flex items-center flex-1">
            <div class="flex items-center h-full w-sidebar-width">
              <button matIconButton class="mr-3" (click)="toggleSidebar.emit()">
                <mat-icon>menu</mat-icon>
              </button>
              <div class="flex items-center">
                <img
                  ngSrc="images/logo_dark.svg"
                  alt="logo"
                  class="w-full h-full"
                  width="77"
                  height="26"
                />
              </div>
            </div>
            <div class="flex-1 max-w-2xl">
              <div class="relative">
                <div
                  class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                >
                  <mat-icon>search</mat-icon>
                </div>
                <input
                  type="text"
                  placeholder="Search songs, albums, artists, podcasts"
                  class="w-full pl-10 pr-4 py-2 bg-yt-card border border-yt-hover rounded-full text-yt-text placeholder-yt-text-secondary focus:outline-none focus:border-white"
                />
              </div>
            </div>
          </div>
          <div class="flex items-center pr-6 gap-4">
            <button matIconButton class="text-white">
              <mat-icon>cast</mat-icon>
            </button>
            <app-user></app-user>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isVisible = input<boolean>(true);
  isScrolled = input<boolean>(false);
  toggleSidebar = output<void>();
}

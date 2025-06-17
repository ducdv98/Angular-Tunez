import { Component, output } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-navbar',
  imports: [MatIconButton, MatIconModule, NgOptimizedImage, UserComponent],
  template: `
    <div class="fixed top-0 left-0 right-0 z-10 bg-yt-sidebar h-navbar-height">
      <div class="pl-3 h-full">
        <div class="flex items-center justify-between h-full">
          <div class="flex items-center h-full">
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
  toggleSidebar = output<void>();
}

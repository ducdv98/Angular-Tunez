import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgOptimizedImage, MatButtonModule, MatIconModule],
  template: `
    <div
      class="fixed left-0 top-0 h-full w-60 bg-yt-sidebar border-r border-yt-hover z-10"
    >
      <!-- Header -->
      <div class="flex items-center p-4 border-b border-yt-hover">
        <button
          mat-icon-button
          aria-label="Example icon button with a vertical three dot icon"
        >
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

      <!-- Navigation -->
      <nav class="py-4">
        <div>
          <a
            href="#"
            class="flex items-center px-6 py-3 text-white hover:bg-yt-hover transition-colors bg-yt-hover"
          >
            <svg class="w-6 h-6 mr-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            <span class="font-medium">Home</span>
          </a>
          <a
            href="#"
            class="flex items-center px-6 py-3 text-yt-text-secondary hover:bg-yt-hover hover:text-white transition-colors"
          >
            <svg class="w-6 h-6 mr-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              />
            </svg>
            <span class="font-medium">Explore</span>
          </a>
          <a
            href="#"
            class="flex items-center px-6 py-3 text-yt-text-secondary hover:bg-yt-hover hover:text-white transition-colors"
          >
            <svg class="w-6 h-6 mr-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"
              />
            </svg>
            <span class="font-medium">Library</span>
          </a>
        </div>

        <div class="border-t border-yt-hover mt-4 pt-4">
          <button
            class="flex items-center px-6 py-3 text-yt-text-secondary hover:bg-yt-hover hover:text-white transition-colors w-full"
          >
            <svg class="w-6 h-6 mr-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
            <span class="font-medium">New playlist</span>
          </button>
        </div>

        <div class="mt-6">
          <div class="px-6 mb-2">
            <h3 class="text-yt-text-secondary text-sm font-medium">
              Liked Music
            </h3>
            <div class="flex items-center mt-1">
              <svg
                class="w-4 h-4 text-yt-text-secondary mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
              <span class="text-sm text-yt-text-secondary">Auto playlist</span>
            </div>
          </div>

          <div class="px-6 mb-2">
            <h3 class="text-yt-text-secondary text-sm font-medium">Refresh</h3>
            <div class="text-sm text-yt-text-secondary mt-1">Duc Dan Van</div>
          </div>

          <div class="px-6">
            <h3 class="text-yt-text-secondary text-sm font-medium">
              Episodes for Later
            </h3>
            <div class="text-sm text-yt-text-secondary mt-1">Auto playlist</div>
          </div>
        </div>
      </nav>
    </div>
  `,
})
export class SidebarComponent {}

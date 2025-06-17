import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header
      class="fixed top-0 left-60 right-0 bg-yt-bg border-b border-yt-hover z-20 px-6 py-3"
    >
      <div class="flex items-center justify-between">
        <!-- Search -->
        <div class="flex-1 max-w-2xl mx-8">
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <svg
                class="h-5 w-5 text-yt-text-secondary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search songs, albums, artists, podcasts"
              class="w-full pl-10 pr-4 py-2 bg-yt-card border border-yt-hover rounded-full text-yt-text placeholder-yt-text-secondary focus:outline-none focus:border-white"
            />
          </div>
        </div>

        <!-- Right side -->
        <div class="flex items-center space-x-4">
          <button class="p-2 hover:bg-yt-hover rounded-full transition-colors">
            <svg
              class="w-6 h-6 text-yt-text-secondary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
              />
            </svg>
          </button>
          <div
            class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"
          >
            <span class="text-sm font-medium text-white">D</span>
          </div>
        </div>
      </div>
    </header>
  `,
})
export class HeaderComponent {}

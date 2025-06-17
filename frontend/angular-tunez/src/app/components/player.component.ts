import { Component } from '@angular/core';

@Component({
  selector: 'app-player',
  standalone: true,
  template: `
    <div
      class="fixed bottom-0 left-0 right-0 bg-yt-card border-t border-yt-hover px-4 py-3 z-30"
    >
      <div class="flex items-center justify-between">
        <!-- Song Info -->
        <div class="flex items-center flex-1 min-w-0 mr-4">
          <img
            src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=100"
            alt="Current song"
            class="w-12 h-12 rounded object-cover mr-3"
          />
          <div class="min-w-0">
            <h4 class="text-white text-sm font-medium truncate">
              CHỈ MỘT ĐÊM NỮA THÔI
            </h4>
            <p class="text-yt-text-secondary text-xs truncate">
              MCK • 0.99 • 2023
            </p>
          </div>
        </div>

        <!-- Controls -->
        <div class="flex items-center justify-center flex-1 max-w-2xl">
          <div class="flex items-center gap-4">
            <button
              class="p-2 hover:bg-yt-hover rounded-full transition-colors"
            >
              <svg
                class="w-5 h-5 text-yt-text-secondary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
              </svg>
            </button>
            <button
              class="p-3 bg-white hover:bg-gray-200 rounded-full transition-colors"
            >
              <svg
                class="w-6 h-6 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <button
              class="p-2 hover:bg-yt-hover rounded-full transition-colors"
            >
              <svg
                class="w-5 h-5 text-yt-text-secondary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
              </svg>
            </button>
          </div>
          <div class="flex items-center gap-2 ml-8 flex-1">
            <span class="text-xs text-yt-text-secondary">0:00</span>
            <div class="flex-1 h-1 bg-yt-hover rounded-full">
              <div class="h-full w-0 bg-white rounded-full"></div>
            </div>
            <span class="text-xs text-yt-text-secondary">2:22</span>
          </div>
        </div>

        <!-- Right Controls -->
        <div class="flex items-center gap-2 flex-1 justify-end">
          <button class="p-2 hover:bg-yt-hover rounded-full transition-colors">
            <svg
              class="w-5 h-5 text-yt-text-secondary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
              />
            </svg>
          </button>
          <button class="p-2 hover:bg-yt-hover rounded-full transition-colors">
            <svg
              class="w-5 h-5 text-yt-text-secondary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
              />
            </svg>
          </button>
          <button class="p-2 hover:bg-yt-hover rounded-full transition-colors">
            <svg
              class="w-5 h-5 text-yt-text-secondary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L8 12.5v-1L15.5 8zm0 8L8 13.5v-1L15.5 16z"
              />
            </svg>
          </button>
          <div class="flex items-center gap-2 ml-2">
            <button
              class="p-2 hover:bg-yt-hover rounded-full transition-colors"
            >
              <svg
                class="w-5 h-5 text-yt-text-secondary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
                />
              </svg>
            </button>
            <div class="w-20 h-1 bg-yt-hover rounded-full">
              <div class="h-full w-3/4 bg-white rounded-full"></div>
            </div>
          </div>
          <button class="p-2 hover:bg-yt-hover rounded-full transition-colors">
            <svg
              class="w-5 h-5 text-yt-text-secondary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
              />
            </svg>
          </button>
          <button class="p-2 hover:bg-yt-hover rounded-full transition-colors">
            <svg
              class="w-5 h-5 text-yt-text-secondary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  `,
})
export class PlayerComponent {}

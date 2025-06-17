import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-album-card',
  standalone: true,
  template: `
    <div class="flex-none w-48 group cursor-pointer">
      <div class="relative">
        <img
          [src]="album.image"
          [alt]="album.title"
          class="w-full h-48 object-cover rounded-lg"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-200 rounded-lg flex items-center justify-center"
        >
          <button
            class="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white rounded-full p-3 hover:scale-105 transform transition-transform"
          >
            <svg
              class="w-6 h-6 text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
      <div class="mt-3">
        <h3 class="text-white font-medium text-sm line-clamp-2 leading-5">
          {{ album.title }}
        </h3>
        <div class="flex items-center mt-1 text-yt-text-secondary text-xs">
          @if (album.type) {
            <span class="flex items-center">
              @if (album.type === 'Song') {
                <svg
                  class="w-3 h-3 mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"
                  />
                </svg>
              }

              {{ album.type }}
            </span>
          }

          <span class="mx-1">•</span>
          <span>{{ album.artist }}</span>
        </div>
      </div>
    </div>
  `,
})
export class AlbumCardComponent {
  @Input() album: any = {};
}

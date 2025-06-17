import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quick-picks',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mb-8">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-white">Quick picks</h2>
        <div class="flex items-center gap-4">
          <button
            class="text-yt-text-secondary hover:text-white transition-colors text-sm font-medium"
          >
            Play all
          </button>
          <button class="p-2 hover:bg-yt-hover rounded-full transition-colors">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
            </svg>
          </button>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-2">
        <div
          *ngFor="let song of songs"
          class="flex items-center p-2 hover:bg-yt-hover rounded-lg transition-colors group cursor-pointer"
        >
          <div class="relative flex-none mr-4">
            <img
              [src]="song.thumbnail"
              [alt]="song.title"
              class="w-12 h-12 rounded object-cover"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 rounded flex items-center justify-center"
            >
              <button
                class="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
          <div class="flex-1 min-w-0">
            <h3 class="text-white text-sm font-medium truncate">
              {{ song.title }}
            </h3>
            <p class="text-yt-text-secondary text-xs truncate">
              {{ song.artist }}
            </p>
          </div>
          <div class="flex items-center gap-2 ml-4">
            <button
              class="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-yt-card rounded"
            >
              <svg
                class="w-4 h-4 text-yt-text-secondary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class QuickPicksComponent {
  songs = [
    {
      title: 'RUN (feat. CHÂU BÙI, 52Hz, LYHAN & YEOLAN)',
      artist: 'EM XINH "SAY HI" • 3.1 ... • TAP 2 - EM XINH "SAY ...',
      thumbnail:
        'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    {
      title: 'SAO HÀNG A (feat. HIEUTHUHAI, Duong Domic, So...)',
      artist: 'ANH TRAI "SAY HI" • 43... • TAP 14 - ANH TRAI "SA...',
      thumbnail:
        'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    {
      title: 'ADAMN',
      artist: 'Bình Gold • 7.6M plays • ADAMN',
      thumbnail:
        'https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    {
      title: 'BIGTEAM BIGDREAM (feat. HURRYKNG, Pháp Kiều...)',
      artist: 'BigDaddy • 7.2M plays • BIGTEAM BIGDREAM',
      thumbnail:
        'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    {
      title: 'Đừng Làm Trái Tim Anh Đau',
      artist: 'Sơn Tùng M-TP • 168M p... • Đừng Làm Trái Tim An...',
      thumbnail:
        'https://images.pexels.com/photos/1717969/pexels-photo-1717969.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    {
      title: 'Westside Music Cypher (feat. Night T, LIGHT N, NO...',
      artist: 'WME • 1.3M plays • Westside Music Cypher',
      thumbnail:
        'https://images.pexels.com/photos/1540338/pexels-photo-1540338.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
  ];
}

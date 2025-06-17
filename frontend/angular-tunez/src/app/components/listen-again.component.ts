import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumCardComponent } from './album-card.component';

@Component({
  selector: 'app-listen-again',
  standalone: true,
  imports: [CommonModule, AlbumCardComponent],
  template: `
    <div class="mb-8">
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center">
          <div
            class="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mr-4"
          >
            <span class="text-lg">😊</span>
          </div>
          <h2 class="text-2xl font-bold text-white">Listen again</h2>
        </div>
        <div class="flex gap-2">
          <button class="p-2 hover:bg-yt-hover rounded-full transition-colors">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
            </svg>
          </button>
          <button class="p-2 hover:bg-yt-hover rounded-full transition-colors">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
            </svg>
          </button>
        </div>
      </div>
      <div class="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
        <app-album-card
          *ngFor="let album of albums"
          [album]="album"
        ></app-album-card>
      </div>
    </div>
  `,
  styles: [
    `
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
    `,
  ],
})
export class ListenAgainComponent {
  albums = [
    {
      title: 'Đối Tự Thế',
      artist: 'Donald Gold & Andree right hand',
      image:
        'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'Song',
    },
    {
      title: 'Sóc Trăng Drill (Cypher)',
      artist: 'Jombie, Sakhar, Chan LekNa, Chips, SinKra, Arna G...',
      image:
        'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'Song',
    },
    {
      title: 'Breakfast - DH, 151 GDucky, Minh (Official Lyrics Video)',
      artist: '151 Official • 24M views',
      image:
        'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'Song',
    },
    {
      title: 'Tình Thằm Duyên Qué (Acoustic)',
      artist: 'Văn Mạn',
      image:
        'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'Song',
    },
    {
      title: 'Hương (HÁOZI x RINY Remix)',
      artist: 'Văn Mai Hương',
      image:
        'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'Song',
    },
    {
      title: 'Tình Nhạt Phai',
      artist: 'Sơn Tùng M-TP',
      image:
        'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'Song',
    },
  ];
}

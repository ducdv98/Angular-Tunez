import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-genre-pills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
      <button
        *ngFor="let genre of genres; let i = index"
        [class]="
          i === 0
            ? 'bg-white text-black'
            : 'bg-yt-card text-yt-text hover:bg-yt-hover'
        "
        class="px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors"
      >
        {{ genre }}
      </button>
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
export class GenrePillsComponent {
  genres = [
    'Energize',
    'Feel good',
    'Workout',
    'Relax',
    'Party',
    'Romance',
    'Commute',
    'Focus',
    'Sad',
    'Sleep',
  ];
}

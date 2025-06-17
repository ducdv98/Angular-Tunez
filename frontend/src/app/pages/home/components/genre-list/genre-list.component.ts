import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-genre-list',
  imports: [MatChipsModule],
  templateUrl: './genre-list.component.html',
  styleUrl: './genre-list.component.scss',
})
export class GenreListComponent {
  genres = [
    'Podcasts',
    'Workout',
    'Relax',
    'Energize',
    'Party',
    'Feel good',
    'Sad',
    'Romance',
    'Commute',
    'Focus',
    'Sleep',
  ];
}

import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { TileListComponent } from './components/tile-list/tile-list.component';
import { GenreListComponent } from './components/genre-list/genre-list.component';
import { QuickPicksComponent } from '../../components/quick-picks.component';

@Component({
  selector: 'app-home',
  imports: [
    MatChipsModule,
    TileListComponent,
    GenreListComponent,
    QuickPicksComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

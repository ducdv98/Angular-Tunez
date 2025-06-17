import { Component } from '@angular/core';
import { AlbumCardComponent } from '../../../../components/album-card.component';

@Component({
  selector: 'app-tile-list',
  imports: [AlbumCardComponent],
  templateUrl: './tile-list.component.html',
  styleUrl: './tile-list.component.scss',
})
export class TileListComponent {
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

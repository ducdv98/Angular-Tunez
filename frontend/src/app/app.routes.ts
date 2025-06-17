import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'explore',
        loadComponent: () =>
          import('./pages/explore/explore.component').then(
            (m) => m.ExploreComponent,
          ),
      },
      {
        path: 'library',
        loadComponent: () =>
          import('./pages/library/library.component').then(
            (m) => m.LibraryComponent,
          ),
      },
    ],
  },
];

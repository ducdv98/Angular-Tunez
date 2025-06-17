import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [MatButtonModule, MatIconModule, RouterLink, RouterLinkActive],
  template: `
    <div class="sidebar">
      <nav class="py-4">
        <div class="px-2">
          @for (item of menuItems; track item.route) {
            <a
              [routerLink]="item.route"
              [routerLinkActiveOptions]="{ exact: true }"
              routerLinkActive="active"
              class="sidebar-item"
              [class.collapsed]="!expanded()"
            >
              <mat-icon class="mr-4">{{ item.icon }}</mat-icon>
              <span class="font-medium">{{ item.label }}</span>
            </a>
          }
        </div>
      </nav>
    </div>
  `,
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  expanded = input<boolean>();

  menuItems = [
    {
      label: 'Home',
      icon: 'home',
      route: '/',
    },
    {
      label: 'Explore',
      icon: 'explore',
      route: '/explore',
    },
    {
      label: 'Library',
      icon: 'library_music',
      route: '/library',
    },
  ];
}

import { Component, signal } from '@angular/core';
import {
  MatDrawerContainer,
  MatDrawer,
  MatDrawerContent,
} from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-main-layout',
  imports: [
    MatDrawerContainer,
    MatDrawer,
    RouterOutlet,
    MatDrawerContent,
    SidebarComponent,
    NavbarComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  sidebarExpanded = signal(true);

  toggleSidebar() {
    this.sidebarExpanded.set(!this.sidebarExpanded());
  }
}

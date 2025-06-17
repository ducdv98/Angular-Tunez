import { Component } from '@angular/core';
import {
  MatDrawerContainer,
  MatDrawer,
  MatDrawerContent,
} from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar.component';

@Component({
  selector: 'app-main-layout',
  imports: [
    MatDrawerContainer,
    MatDrawer,
    RouterOutlet,
    MatDrawerContent,
    SidebarComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {}

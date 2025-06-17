import {
  Component,
  signal,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import {
  MatDrawerContainer,
  MatDrawer,
  MatDrawerContent,
} from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { PlayerComponent } from '../../components/player.component';

@Component({
  selector: 'app-main-layout',
  imports: [
    MatDrawerContainer,
    MatDrawer,
    RouterOutlet,
    MatDrawerContent,
    SidebarComponent,
    NavbarComponent,
    PlayerComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent implements OnDestroy, AfterViewInit {
  @ViewChild('drawerContent', { read: ElementRef })
  drawerContent!: ElementRef<HTMLElement>;

  sidebarExpanded = signal(true);
  navbarVisible = signal(true);
  navbarScrolled = signal(false);

  private lastScrollY = 0;
  private ticking = false;
  private readonly scrollThreshold = 10;

  ngAfterViewInit() {
    if (this.drawerContent?.nativeElement) {
      this.drawerContent.nativeElement.addEventListener(
        'scroll',
        this.handleScroll.bind(this),
        { passive: true },
      );
    }
  }

  ngOnDestroy() {
    if (this.drawerContent?.nativeElement) {
      this.drawerContent.nativeElement.removeEventListener(
        'scroll',
        this.handleScroll.bind(this),
      );
    }
  }

  toggleSidebar() {
    this.sidebarExpanded.set(!this.sidebarExpanded());
  }

  private handleScroll() {
    if (!this.ticking) {
      requestAnimationFrame(() => {
        this.updateNavbarVisibility();
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  private updateNavbarVisibility() {
    if (!this.drawerContent?.nativeElement) return;

    const currentScrollY = this.drawerContent.nativeElement.scrollTop;

    this.navbarScrolled.set(currentScrollY > this.scrollThreshold);

    if (currentScrollY <= this.scrollThreshold) {
      this.navbarVisible.set(true);
    } else if (
      currentScrollY > this.lastScrollY + this.scrollThreshold &&
      currentScrollY > 100
    ) {
      this.navbarVisible.set(false);
    } else if (currentScrollY < this.lastScrollY - this.scrollThreshold) {
      this.navbarVisible.set(true);
    }

    this.lastScrollY = currentScrollY;
  }
}

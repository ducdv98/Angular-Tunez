import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user',
  imports: [MatIconModule],
  template: `
    <div class="flex items-center w-6 h-6 rounded-full bg-yt-hover">
      <mat-icon>person</mat-icon>
    </div>
  `,
})
export class UserComponent {}

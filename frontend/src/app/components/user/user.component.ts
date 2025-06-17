import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user',
  imports: [MatIconModule],
  template: `
    <div
      class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"
    >
      <span class="text-sm font-medium text-white">D</span>
    </div>
  `,
})
export class UserComponent {}

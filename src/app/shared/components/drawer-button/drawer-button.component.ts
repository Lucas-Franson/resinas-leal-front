import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-drawer-button',
  standalone: true,
  imports: [
    MatIconModule,RouterLink,RouterLinkActive
  ],
  templateUrl: './drawer-button.component.html',
  styleUrl: './drawer-button.component.css'
})
export class DrawerButtonComponent {

  @Input()
  routerLink?: string;

  @Input()
  routerLinkActiveOptions: { exact: boolean } = { exact: true };

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterOutlet } from '@angular/router';
import { DrawerButtonComponent } from '../../shared/components/drawer-button/drawer-button.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,MatIconModule,MatSidenavModule,MatToolbarModule,MatDividerModule,MatListModule,
    MatButtonModule,DrawerButtonComponent,MatCardModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  @ViewChild('drawer') drawer!: MatDrawer;
  drawerOpened: boolean = true;
  menuIcon: string = 'menu_open';

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.menuIcon = this.drawerOpened ? 'menu_open' : 'menu';
  }

  toggleDrawer(){
    this.drawer.toggle();
    this.menuIcon = this.drawer?.opened ? 'menu_open' : 'menu';
  }

  logout(){
    this.router.navigate(['/login']);
  }

}

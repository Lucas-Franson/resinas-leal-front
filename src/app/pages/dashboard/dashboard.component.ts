import { Component } from '@angular/core';
import { AgendaTableComponent } from './components/agenda-table/agenda-table.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ChartLineComponent } from './components/chart-line/chart-line.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AgendaTableComponent,MatGridListModule,ChartLineComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
}
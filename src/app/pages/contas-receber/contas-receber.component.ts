import { Component } from '@angular/core';
import { ContasReceberTableComponent } from './components/contas-receber-table/contas-receber-table.component';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-contas-receber',
  standalone: true,
  imports: [
    ContasReceberTableComponent,MatCardModule,MatButtonModule,RouterLink
  ],
  templateUrl: './contas-receber.component.html',
  styleUrl: './contas-receber.component.css'
})
export class ContasReceberComponent{
}

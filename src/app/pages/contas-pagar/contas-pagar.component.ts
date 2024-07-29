import { Component } from '@angular/core';
import { ContasPagarTableComponent } from './components/contas-pagar-table/contas-pagar-table.component';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-contas-pagar',
  standalone: true,
  imports: [
    ContasPagarTableComponent,MatCardModule,MatButtonModule,RouterLink
  ],
  templateUrl: './contas-pagar.component.html',
  styleUrl: './contas-pagar.component.css'
})
export class ContasPagarComponent  {
}

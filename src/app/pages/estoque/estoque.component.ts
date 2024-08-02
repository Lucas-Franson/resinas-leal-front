import { Component } from '@angular/core';
import { EstoqueTableComponent } from './components/estoque-table.component';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-estoque',
  standalone: true,
  imports: [
    EstoqueTableComponent,MatCardModule,MatButtonModule,RouterLink
  ],
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.css'
})
export class EstoqueComponent  {
}

import { Component } from '@angular/core';
import { FazendaTableComponent } from './components/fazenda-table/fazenda-table.component';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-fazenda',
  standalone: true,
  imports: [
    MatCardModule,MatButtonModule,RouterLink,FazendaTableComponent
  ],
  templateUrl: './fazenda.component.html',
  styleUrl: './fazenda.component.css'
})
export class FazendaComponent {

}

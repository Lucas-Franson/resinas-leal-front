import { Component } from '@angular/core';
import { CargaTableComponent } from './components/carga-table/carga-table.component';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-carga',
  standalone: true,
  imports: [
    CargaTableComponent,MatCardModule,MatButtonModule,RouterLink
  ],
  templateUrl: './carga.component.html',
  styleUrl: './carga.component.css'
})
export class CargaComponent {
}

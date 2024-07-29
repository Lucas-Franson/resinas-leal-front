import { Component, OnInit } from '@angular/core';
import { CaixaTableComponent } from './components/caixa-table/caixa-table.component';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-caixa',
  standalone: true,
  imports: [
    CaixaTableComponent,MatCardModule,MatButtonModule,RouterLink
  ],
  templateUrl: './caixa.component.html',
  styleUrl: './caixa.component.css'
})
export class CaixaComponent {
}

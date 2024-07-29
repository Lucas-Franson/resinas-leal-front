import { Component } from '@angular/core';
import { EmpresaTableComponent } from './components/empresa-table/empresa-table.component';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-empresa',
  standalone: true,
  imports: [
    EmpresaTableComponent,MatCardModule,MatButtonModule,RouterLink
  ],
  templateUrl: './empresa.component.html',
  styleUrl: './empresa.component.css'
})
export class EmpresaComponent  {
}

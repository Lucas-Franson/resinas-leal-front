import { Component } from '@angular/core';
import { FunctionariosTableComponent } from './components/functionarios-table/functionarios-table.component';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-funcionarios',
  standalone: true,
  imports: [
    FunctionariosTableComponent,MatCardModule,MatButtonModule,RouterLink
  ],
  templateUrl: './funcionarios.component.html',
  styleUrl: './funcionarios.component.css'
})
export class FuncionariosComponent{

}

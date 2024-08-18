import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { PedidoTableComponent } from './components/pedido-table/pedido-table.component';

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [
    MatCardModule,MatButtonModule,RouterLink,PedidoTableComponent   
  ],
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css'
})
export class PedidoComponent {

}

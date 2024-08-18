import { Component, ViewChild, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DialogComponent } from '../../../../shared/components/dialog/dialog.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pedido-table',
  standalone: true,
  imports: [
    MatTableModule,MatPaginatorModule,MatIconModule
  ],
  templateUrl: './pedido-table.component.html',
  styleUrl: './pedido-table.component.css'
})
export class PedidoTableComponent {
  displayedColumns: string[] = ['codigo', 'produto', 'preco', 'custo', 'estoque', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  readonly dialog = inject(MatDialog);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '250px'
    });
  }
}

export interface PeriodicElement {
  codigo: string;
  produto: string;
  preco: number;
  custo: number;
  estoque: number;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {codigo: '1', produto: 'Produto 1', preco: 1.0079, custo: 1.0079, estoque: 1, actions: ''},
  {codigo: '2', produto: 'Produto 2', preco: 4.0026, custo: 4.0026, estoque: 2, actions: ''},
  {codigo: '3', produto: 'Produto 3', preco: 6.941, custo: 6.941, estoque: 3, actions: ''},
  {codigo: '4', produto: 'Produto 4', preco: 9.0122, custo: 9.0122, estoque: 4, actions: ''},
  {codigo: '5', produto: 'Produto 5', preco: 10.811, custo: 10.811, estoque: 5, actions: ''},
  {codigo: '6', produto: 'Produto 6', preco: 12.0107, custo: 12.0107, estoque: 6, actions: ''},
  {codigo: '7', produto: 'Produto 7', preco: 14.0067, custo: 14.0067, estoque: 7, actions: ''},
  {codigo: '8', produto: 'Produto 8', preco: 15.9994, custo: 15.9994, estoque: 8, actions: ''},
  {codigo: '9', produto: 'Produto 9', preco: 18.9984, custo: 18.9984, estoque: 9, actions: ''},
  {codigo: '10', produto: 'Produto 10', preco: 20.1797, custo: 20.1797, estoque: 10, actions: ''},
  {codigo: '11', produto: 'Produto 11', preco: 22.9897, custo: 22.9897, estoque: 11, actions: ''},
  {codigo: '12', produto: 'Produto 12', preco: 24.305, custo: 24.305, estoque: 12, actions: ''}
];
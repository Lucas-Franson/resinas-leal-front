import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-estoque-table',
  standalone: true,
  imports: [
    MatTableModule, MatPaginatorModule,MatIconModule
  ],
  templateUrl: './estoque-table.component.html',
  styleUrl: './estoque-table.component.css'
})
export class EstoqueTableComponent {
  displayedColumns: string[] = ['position', 'produto', 'codigo', 'valor', 'custo', 'estoqueFisico', 'unidade', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  position: number;
  produto: string;  
  codigo: string;
  valor: string;
  custo: string;  
  estoqueFisico: string;
  unidade: string;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, produto: 'Bota de Borracha', codigo: '00123', valor: '90,00', custo: '50,00', estoqueFisico: '10', unidade: '5', actions: ''},
  {position: 2, produto: 'Pneu aro 13', codigo: '00124', valor: '150,00', custo: '100,00', estoqueFisico: '4', unidade: '2', actions: ''},
  {position: 3, produto: 'Chapéu', codigo: '00125', valor: '50,00', custo: '20,00', estoqueFisico: '25', unidade: '12', actions: ''},
];


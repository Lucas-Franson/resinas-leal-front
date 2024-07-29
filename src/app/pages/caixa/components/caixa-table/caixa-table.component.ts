import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-caixa-table',
  standalone: true,
  imports: [
    MatTableModule, MatPaginatorModule,MatIconModule
  ],
  templateUrl: './caixa-table.component.html',
  styleUrl: './caixa-table.component.css'
})
export class CaixaTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', actions: ''},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', actions: ''},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', actions: ''},
];
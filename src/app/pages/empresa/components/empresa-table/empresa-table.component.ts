import { Component, ViewChild, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DialogComponent } from '../../../../shared/components/dialog/dialog.component';

@Component({
  selector: 'app-empresa-table',
  standalone: true,
  imports: [
    MatTableModule, MatPaginatorModule,MatIconModule
  ],
  templateUrl: './empresa-table.component.html',
  styleUrl: './empresa-table.component.css'
})
export class EmpresaTableComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'actions'];
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
import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-carga-table',
  standalone: true,
  imports: [
    MatTableModule, MatPaginatorModule,MatIconModule
  ],
  templateUrl: './carga-table.component.html',
  styleUrl: './carga-table.component.css'
})
export class CargaTableComponent {
  displayedColumns: string[] = ['data', 'qtd', 'area', 'nf', 'actions'];
  dataSource = new MatTableDataSource<Carga>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Carga {
  data: string;
  qtd: number;
  area: string;
  nf: string;
  actions: string;
}

const ELEMENT_DATA: Carga[] = [
  {data: '01/01/2021', qtd: 10, area: 'Área 1', nf: '123456', actions: ''},
  {data: '02/01/2021', qtd: 20, area: 'Área 2', nf: '123457', actions: ''},
  {data: '03/01/2021', qtd: 30, area: 'Área 3', nf: '123458', actions: ''},
  {data: '04/01/2021', qtd: 40, area: 'Área 4', nf: '123459', actions: ''},
];
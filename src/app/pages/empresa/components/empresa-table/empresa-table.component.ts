import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

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
  displayedColumns: string[] = ['position', 'razaoSocial', 'cnpj', 'parceiro', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  razaoSocial: string;
  position: number;
  cnpj: string;
  parceiro: string;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, razaoSocial: 'Resinas de Paula', cnpj: '98.418.791/0001-79', parceiro: 'Sim', actions: ''},
  {position: 2, razaoSocial: 'Resinas Leal', cnpj: '98.418.791/0001-12', parceiro: 'Sim', actions: ''},
  {position: 3, razaoSocial: 'Resinas João', cnpj: '98.418.791/0001-56', parceiro: 'Não', actions: ''},
];


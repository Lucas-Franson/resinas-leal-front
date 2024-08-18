import { Component, ViewChild, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DialogComponent } from '../../../../shared/components/dialog/dialog.component';

@Component({
  selector: 'app-fazenda-table',
  standalone: true,
  imports: [
    MatTableModule,MatPaginatorModule,MatIconModule
  ],
  templateUrl: './fazenda-table.component.html',
  styleUrl: './fazenda-table.component.css'
})
export class FazendaTableComponent {
  displayedColumns: string[] = ['codigo', 'proprietario', 'nome', 'actions'];
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
  proprietario: string;
  nome: string;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {codigo: '1', proprietario: 'Proprietario 1', nome: 'Fazenda 1', actions: ''},
  {codigo: '2', proprietario: 'Proprietario 2', nome: 'Fazenda 2', actions: ''},
  {codigo: '3', proprietario: 'Proprietario 3', nome: 'Fazenda 3', actions: ''},
  {codigo: '4', proprietario: 'Proprietario 4', nome: 'Fazenda 4', actions: ''},
  {codigo: '5', proprietario: 'Proprietario 5', nome: 'Fazenda 5', actions: ''},
  {codigo: '6', proprietario: 'Proprietario 6', nome: 'Fazenda 6', actions: ''},
  {codigo: '7', proprietario: 'Proprietario 7', nome: 'Fazenda 7', actions: ''},
  {codigo: '8', proprietario: 'Proprietario 8', nome: 'Fazenda 8', actions: ''},
  {codigo: '9', proprietario: 'Proprietario 9', nome: 'Fazenda 9', actions: ''},
  {codigo: '10', proprietario: 'Proprietario 10', nome: 'Fazenda 10', actions: ''},
  {codigo: '11', proprietario: 'Proprietario 11', nome: 'Fazenda 11', actions: ''},
  {codigo: '12', proprietario: 'Proprietario 12', nome: 'Fazenda 12', actions: ''}
];
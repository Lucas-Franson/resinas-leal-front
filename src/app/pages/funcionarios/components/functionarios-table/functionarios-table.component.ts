import { Component, ViewChild, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DialogComponent } from '../../../../shared/components/dialog/dialog.component';

@Component({
  selector: 'app-functionarios-table',
  standalone: true,
  imports: [
    MatTableModule, MatPaginatorModule,MatIconModule
  ],
  templateUrl: './functionarios-table.component.html',
  styleUrl: './functionarios-table.component.css'
})
export class FunctionariosTableComponent {
  displayedColumns: string[] = ['codigo', 'equipe', 'nome', 'actions'];
  dataSource = new MatTableDataSource<Funcionarios>(ELEMENT_DATA);
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

export interface Funcionarios {
  codigo: string;
  equipe: string;
  nome: string;
  actions: string;
}

const ELEMENT_DATA: Funcionarios[] = [
  {codigo: '1', equipe: 'Equipe 1', nome: 'João', actions: ''},
  {codigo: '2', equipe: 'Equipe 2', nome: 'Maria', actions: ''},
  {codigo: '3', equipe: 'Equipe 3', nome: 'José', actions: ''},
  {codigo: '4', equipe: 'Equipe 4', nome: 'Ana', actions: ''},
  {codigo: '5', equipe: 'Equipe 5', nome: 'Carlos', actions: ''},
  {codigo: '6', equipe: 'Equipe 6', nome: 'Paula', actions: ''},
];
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-agenda-table',
  standalone: true,
  imports: [
    MatTableModule, MatPaginatorModule
  ],
  templateUrl: './agenda-table.component.html',
  styleUrl: './agenda-table.component.css'
})
export class AgendaTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['nome', 'valor', 'vencimento'];
  dataSource = new MatTableDataSource<Agenda>(ELEMENT_DATA);

  totalVal = ELEMENT_DATA
    .map(t => parseInt(t.valor.replace('R$ ', '')))
    .reduce((acc, value) => acc + value, 0)
    .toFixed(2);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Agenda {
  id: number;
  nome: string;
  valor: string;
  vencimento: string;
}

const ELEMENT_DATA: Agenda[] = [
  {id: 1, nome: 'Hydrogen', valor: 'R$ 10,00', vencimento: '01/01/2021'},
  {id: 2, nome: 'Helium', valor: 'R$ 20,00', vencimento: '01/01/2021'},
  {id: 3, nome: 'Lithium', valor: 'R$ 30,00', vencimento: '01/01/2021'},
  {id: 4, nome: 'Beryllium', valor: 'R$ 40,00', vencimento: '01/01/2021'},
  {id: 5, nome: 'Boron', valor: 'R$ 50,00', vencimento: '01/01/2021'}
];

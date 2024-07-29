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
  displayedColumns: string[] = ['nome', 'descricao', 'data'];
  dataSource = new MatTableDataSource<Agenda>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Agenda {
  id: number;
  nome: string;
  descricao: string;
  data: string;
}

const ELEMENT_DATA: Agenda[] = [
  {id: 1, nome: 'Reunião', descricao: 'Reunião de alinhamento', data: '2021-10-01'},
  {id: 2, nome: 'Entrega', descricao: 'Entrega de projeto', data: '2021-10-02'},
  {id: 3, nome: 'Apresentação', descricao: 'Apresentação de resultados', data: '2021-10-03'},
  {id: 4, nome: 'Reunião', descricao: 'Reunião de alinhamento', data: '2021-10-04'},
  {id: 5, nome: 'Entrega', descricao: 'Entrega de projeto', data: '2021-10-05'},
  {id: 6, nome: 'Reunião', descricao: 'Reunião de alinhamento', data: '2021-10-06'},
  {id: 7, nome: 'Entrega', descricao: 'Entrega de projeto', data: '2021-10-07'}
];

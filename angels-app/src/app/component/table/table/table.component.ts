import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { TableColumn } from 'src/app/model/tableColumn/tablecolumn.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  @Input() objectList: any[];
  @Input() displayedColumns: string[];
  @Input() columns: TableColumn[];
  @Input() tableTitle: string;
  dataSource: MatTableDataSource<any>;

  constructor() {
   }

   ngOnInit() {
    this.dataSource = new MatTableDataSource(this.objectList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

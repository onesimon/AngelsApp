import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Autovettura } from 'src/app/model/autovettura/autovettura.model';
import  * as moment from 'moment';
import { element } from 'protractor';
import { TableColumn } from 'src/app/model/tableColumn/tablecolumn.model';

@Component({
  selector: 'app-autovetture',
  templateUrl: './autovetture.component.html',
  styleUrls: ['./autovetture.component.css']
})
export class AutovettureComponent implements OnInit {

  columns : TableColumn[] = [
    new TableColumn('marca', 'Marca', (element : Autovettura) => element.marca),
    new TableColumn('modello', 'Modello', (element : Autovettura) => element.modello),
    new TableColumn('targa', 'Targa', (element : Autovettura) => element.targa),
    new TableColumn('dataInizioString', 'Data inizio', (element : Autovettura) => element.dataInizioString),
    new TableColumn('_action', 'Azioni', null)
  ]; 
  displayedColumns = this.columns.map(x => x.columnDef);

  listaOggetti: any;
  dataSource: MatTableDataSource<Autovettura>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
    // Per ora sono dati mockati, andrà aggiunta una find sul db per idUtente
    this.listaOggetti = this.getAutovetturaMock();
  }

  ngOnInit() {
  }

  // recuper autovetture mock
  public getAutovetturaMock(): Array<Autovettura> {
    var autovetturaMock: Array<Autovettura> = [];
    var autovettura: Autovettura;

    autovettura = new Autovettura(1, 1, moment(), " CM897TP", 'Opel', 'Astra');
    autovetturaMock.push(autovettura);
    autovettura = new Autovettura(1, 1, moment(), " FR098U7", 'Alfa', '147');
    autovetturaMock.push(autovettura);

    return autovetturaMock;
  }
}

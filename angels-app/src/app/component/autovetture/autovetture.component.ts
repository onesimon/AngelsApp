import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Autovettura } from 'src/app/model/autovettura/autovettura.model';
import  * as moment from 'moment';

@Component({
  selector: 'app-autovetture',
  templateUrl: './autovetture.component.html',
  styleUrls: ['./autovetture.component.css']
})
export class AutovettureComponent implements OnInit {

  displayedColumns: string[] = ['marca', 'modello', 'targa', 'dataInizio', 'dataFine', '_action'];
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

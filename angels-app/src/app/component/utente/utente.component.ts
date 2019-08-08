import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Utente } from 'src/app/model/utente/utente.model';
import { LocalStorageService } from 'src/app/service/localStorageService';
import { Autovettura } from 'src/app/model/autovettura/autovettura.model';
import  * as moment from 'moment';

@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.css']
})

export class UtenteComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'cognome', 'cf', 'autovettura', '_action'];
  dataSource: MatTableDataSource<Utente>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private localStorageService : LocalStorageService) {
    // Assegno al dataSource i dati che saranno visti in tabella
    this.dataSource = new MatTableDataSource(this.createUtentiMock());
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Creazione utenti per test
  private createUtentiMock(): Array<Utente> {
    var utentiMock: Array<Utente> = [];
    var utente: Utente;

    utente = new Utente(1,'Angelo', 'Passariello', 'PSRAGL89L17L151F', [new Autovettura(1, 1, moment(), " CM897TP", 'Opel', 'Astra')]);
    utentiMock.push(utente);
    utente = new Utente(2,'Simone', 'Aristotile', 'SMNART89L17L151F', [new Autovettura(1, 1, moment(), " FR098U7", 'Alfa', '147')]);
    utentiMock.push(utente);
    utente = new Utente(3,'Pippo', 'Baudo', 'PPBAD98O92P094R', [new Autovettura(1, 1, moment(), " FR098U7", 'Alfa', '147')]);
    utentiMock.push(utente);
    utente = new Utente(4,'Tommaso', 'Pecora', 'TMMPCA45T98R456T', [new Autovettura(1, 1, moment(), " CM897TP", 'Opel', 'Astra')]);
    utentiMock.push(utente);

    return utentiMock;
  }

  public changeUtenteTest(utente : Utente) {
    this.localStorageService.emitNavChangeEvent(utente);
  }
}

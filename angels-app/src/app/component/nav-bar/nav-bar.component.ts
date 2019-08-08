import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Utente } from 'src/app/model/utente/utente.model';
import { Autovettura } from 'src/app/model/autovettura/autovettura.model';
import { LocalStorageService } from 'src/app/service/localStorageService';
import * as moment from "moment";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [LocalStorageService]
})

export class NavBarComponent implements OnInit {

  //Variabili che andranno estratte dal localStorage
  utenteSelected: Utente;
  subscription: any;

  constructor(private localStorageService : LocalStorageService) {
    //Aggiungo nel localStorage un utente per prova
    this.utenteSelected = new Utente(1,'Angelo', 'Passariello', 'PSRAGL89L17L151F', [new Autovettura(1, 1, moment(), " CM897TP", 'Opel', 'Astra')]);
    localStorage.setItem('utenteSelected', JSON.stringify(this.utenteSelected));
   }

  ngOnInit() {
    this.subscription = this.localStorageService.getNavChangeEmitter()
    .subscribe(item => this.selectedNavItem(item));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  selectedNavItem(item: Utente) {
    this.utenteSelected = item;
  }

}

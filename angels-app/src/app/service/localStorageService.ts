import {EventEmitter} from '@angular/core';
import { Utente } from '../model/utente/utente.model';

export class LocalStorageService {

  navchange: EventEmitter<Utente> = new EventEmitter();

  constructor() {}

  emitNavChangeEvent(utente) {
    localStorage.setItem('utenteSelected', JSON.stringify(utente));
    this.navchange.emit(utente);
  }

  getNavChangeEmitter() {
    return this.navchange;
  }
}
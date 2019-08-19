import { BaseModel } from '../baseModel/base.model';
import * as moment from "moment";

export class Autovettura extends BaseModel{
    private _idUtente: number;
    private _dataInizio: moment.Moment;
    private _targa: String;
    private _marca: String;
    private _modello: String;

    constructor(id: number, idUtente: number, dataInizio: moment.Moment, targa: String, marca: String, modello: String){
        super(id);
        this.idUtente = idUtente;
        this.dataInizio = dataInizio;
        this.targa = targa;
        this.marca = marca;
        this.modello = modello;
    }

    /* GETTER AND SETTER */
    public get idUtente(): number {
        return this._idUtente;
    }
    public set idUtente(value: number) {
        this._idUtente = value;
    }
    public get dataInizio(): moment.Moment {
        return this._dataInizio;
    }
    public set dataInizio(value: moment.Moment) {
        this._dataInizio = value;
    }
    public get targa(): String {
        return this._targa;
    }
    public set targa(value: String) {
        this._targa = value;
    }
    public get marca(): String {
        return this._marca;
    }
    public set marca(value: String) {
        this._marca = value;
    }
    public get modello(): String {
        return this._modello;
    }
    public set modello(value: String) {
        this._modello = value;
    }
    public get dataInizioString(): String {
        return this.dataInizio.format('DD/MM/YYYY');
    }
}

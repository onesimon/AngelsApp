import { BaseModel } from '../baseModel/base.model';
import * as moment from "moment";

export class Autovettura extends BaseModel{
    private idUtente: number;
    private dataInizio: moment.Moment;
    private targa: String;
    private marca: String;
    private modello: String;

    constructor(id: number, idUtente: number, dataInizio: moment.Moment, targa: String, marca: String, modello: String){
        super(id);
        this.idUtente = idUtente;
        this.dataInizio = dataInizio;
        this.targa = targa;
        this.marca = marca;
        this.modello = modello;
    }
}

import { Autovettura } from '../autovettura/autovettura.model';
import { BaseModel } from '../baseModel/base.model';

export class Utente extends BaseModel{
    private nome: String;
    private cognome: String;
    private cf: String;
    private autovettura: Array<Autovettura>;

    constructor(id: number, nome: String, cognome: String, cf: String, autovettura: Array<Autovettura>){
        super(id);
        this.nome = nome;
        this.cognome = cognome;
        this.cf = cf;
        this.autovettura = autovettura;
    }
}

import { Autovettura } from '../autovettura/autovettura.model';
import { BaseModel } from '../baseModel/base.model';

export class Utente extends BaseModel{
    private _nome: String;
    private _cognome: String;
    private _cf: String;
    private _autovettura: Array<Autovettura>;

    constructor(id: number, nome: String, cognome: String, cf: String, autovettura: Array<Autovettura>){
        super(id);
        this.nome = nome;
        this.cognome = cognome;
        this.cf = cf;
        this.autovettura = autovettura;
    }    
    
    /* GETTER AND SETTER */
    public get nome(): String {
        return this._nome;
    }
    public set nome(value: String) {
        this._nome = value;
    }
    public get cognome(): String {
        return this._cognome;
    }
    public set cognome(value: String) {
        this._cognome = value;
    }
    public get cf(): String {
        return this._cf;
    }
    public set cf(value: String) {
        this._cf = value;
    }
    public get autovettura(): Array<Autovettura> {
        return this._autovettura;
    }
    public set autovettura(value: Array<Autovettura>) {
        this._autovettura = value;
    }
}

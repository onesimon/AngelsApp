export class TableColumn {
    private _columnDef: String;
    private _header: String;
    private _cell: any;

    constructor(columnDef: String, header: String, cell: any){
        this.columnDef = columnDef;
        this.header = header;
        this.cell = cell;
    }

    /* GETTER AND SETTER */
    public get columnDef(): String {
        return this._columnDef;
    }
    public set columnDef(value: String) {
        this._columnDef = value;
    }
    public get header(): String {
        return this._header;
    }
    public set header(value: String) {
        this._header = value;
    }
    public get cell(): any {
        return this._cell;
    }
    public set cell(value: any) {
        this._cell = value;
    }
}

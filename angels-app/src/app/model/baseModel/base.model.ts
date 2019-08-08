
export class BaseModel {
    private _id: number;

    constructor(id: number){
        this.id = id;
    }

	public static convertThisToJson(): string {
		return JSON.stringify(this, Object.keys(this.constructor.prototype));
	}
    
    /* GETTER AND SETTER */
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
}

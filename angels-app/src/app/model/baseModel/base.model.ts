
export class BaseModel {
    private id: number;

    constructor(id: number){
        this.id = id;
    }

	public static convertThisToJson(): string {
		return JSON.stringify(this, Object.keys(this.constructor.prototype));
	}
}

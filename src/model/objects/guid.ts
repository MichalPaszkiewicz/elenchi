export class Guid{
    constructor(public _id: string) {
        
    }

    toString(){
        return this._id;
    }

    NewGuid(){
        return new Guid("123");
    }

    equals(other: Guid){
        return this._id == other._id;
    }
}
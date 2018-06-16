export class Guid{
    constructor(public _id: string) {
        
    }

    toString(){
        return this._id;
    }

    static s4(){
        return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
    }

    static NewGuid(): Guid{
        var self = this;
        return new Guid(self.s4() + self.s4() + '-' + 
                        self.s4() + '-' + 
                        self.s4() + '-' + 
                        self.s4() + '-' + 
                        self.s4() + self.s4() + self.s4());
    }

    equals(other: Guid){
        return this._id == other._id;
    }
}
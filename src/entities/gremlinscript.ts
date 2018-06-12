export class GremlinScript{
    private _script: string;
    constructor(startScript?: string){
        this._script = startScript || "";
    }
    static vertices(){
        return new GremlinScript("g.V()");
    }
    static edges(){
        return new GremlinScript("g.E()");
    }

    property(key: string, value: string){
        return new GremlinScript(`${this._script}.property("${key}","${value}")`);
    }

    addV(label: string){
        return new GremlinScript(`${this._script}.addV("${label}")`);
    }

    addE(label: string){
        return new GremlinScript(`${this._script}.addE("${label}")`);
    }

    to(vertex: GremlinScript){
        return new GremlinScript(`${this._script}.to(${vertex.toString()})`);
    }

    hasLabel(label: string){
        return new GremlinScript(`${this._script}.hasLabel("${label}")`);
    }

    has(key: string, value: string){
        return new GremlinScript(`${this._script}.has("${key}","${value}")`)
    }

    toString(){
        return this._script;
    }
}

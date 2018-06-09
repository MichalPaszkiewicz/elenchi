import { Vertex } from "./vertex";

export var FACT_VERTEX_NAME = "fact";

export class Fact extends Vertex{
    text: string;
    type: string = FACT_VERTEX_NAME;
    constructor(summary: string, public evidence: string){
        super();
        this.text = summary;
    }
}
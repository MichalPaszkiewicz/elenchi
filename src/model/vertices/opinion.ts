import { Vertex } from "./vertex";

export var OPINION_VERTEX_NAME = "opinion";

export class Opinion extends Vertex {
    type: string = OPINION_VERTEX_NAME;
    constructor(public text: string){
        super();
    }
}
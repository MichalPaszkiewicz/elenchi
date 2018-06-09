import { Vertex } from "./vertex";

export var DEFINITION_VERTEX_NAME = "definition";

export class Definition extends Vertex {
    type: string = DEFINITION_VERTEX_NAME;
    constructor(public text: string){
        super();
    }
}
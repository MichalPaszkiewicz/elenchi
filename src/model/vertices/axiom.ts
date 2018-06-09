import { Vertex } from "./vertex";


export var AXIOM_VERTEX_NAME = "axiom";
export class Axiom extends Vertex{
    type: string = AXIOM_VERTEX_NAME;
    constructor(public text: string){
        super();
    }
}
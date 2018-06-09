import { Vertex } from "./vertex";

export var CONCLUSION_VERTEX_NAME = "conclusion";

export class Conclusion extends Vertex {
    type: string = CONCLUSION_VERTEX_NAME;
    constructor(public text: string){
        super();
    }
}
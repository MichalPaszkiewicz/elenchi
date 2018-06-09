import { Vertex } from "./vertex";

export var QUESTION_VERTEX_NAME = "question";

export class Question extends Vertex {
    type: string = QUESTION_VERTEX_NAME;
    constructor(public text: string){
        super();
    }
}
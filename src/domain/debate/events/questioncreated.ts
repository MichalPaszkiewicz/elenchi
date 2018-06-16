import { VertexCreated } from "./vertexCreated";

export var QUESTION_CREATED_EVENT_NAME = "question created";

export class QuestionCreated extends VertexCreated{
    name: string = QUESTION_CREATED_EVENT_NAME;
    createdBy: string;
    constructor(public aggregateID: string, public text: string){
        super();
    }
}
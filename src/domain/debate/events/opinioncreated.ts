import { VertexCreated } from "./vertexCreated";

export var OPINION_CREATED_EVENT_NAME = "opinion created";

export class OpinionCreated extends VertexCreated{
    name: string = OPINION_CREATED_EVENT_NAME;
    createdBy: string;
    constructor(public aggregateID: string, public text: string){
        super();
    }
}
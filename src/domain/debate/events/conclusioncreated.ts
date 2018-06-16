import { VertexCreated } from "./vertexCreated";

export var CONCLUSION_CREATED_EVENT_NAME = "conclusion created";

export class ConclusionCreated extends VertexCreated{
    name: string = CONCLUSION_CREATED_EVENT_NAME;
    createdBy: string;
    constructor(public aggregateID: string, public text: string){
        super();
    }
}
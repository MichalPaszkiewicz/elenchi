import { VertexCreated } from "./vertexCreated";

export var FACT_CREATED_EVENT_NAME = "fact created";

export class FactCreated extends VertexCreated{
    name: string =FACT_CREATED_EVENT_NAME;
    createdBy: string;
    constructor(public aggregateID: string, public text: string, public evidence: string){
        super();
    }
}
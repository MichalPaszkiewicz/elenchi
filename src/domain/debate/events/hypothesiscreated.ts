import { VertexCreated } from "./vertexCreated";

export var HYPOTHESIS_CREATED_EVENT_NAME = "hypothesis created";

export class HypothesisCreated extends VertexCreated{
    name: string = HYPOTHESIS_CREATED_EVENT_NAME;
    createdBy: string;
    constructor(public aggregateID: string, public text: string){
        super();
    }
}
import { VertexCreated } from "./vertexCreated";

export var THEOREM_CREATED_EVENT_NAME = "theorem created";

export class TheoremCreated extends VertexCreated{
    name: string = THEOREM_CREATED_EVENT_NAME;
    createdBy: string;
    constructor(public aggregateID: string, public text: string){
        super();
    }
}
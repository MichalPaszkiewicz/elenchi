import { VertexCreated } from "./vertexCreated";

export var AXIOM_CREATED_EVENT_NAME = "axiom created";

export class AxiomCreated extends VertexCreated {
    name: string = AXIOM_CREATED_EVENT_NAME;
    createdBy: string;

    constructor(public aggregateID: string, public text: string){
        super();
    }
}
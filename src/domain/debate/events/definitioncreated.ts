import { VertexCreated } from "./vertexCreated";

export var DEFINITION_CREATED_EVENT_NAME = "definition created";

export class DefinitionCreated extends VertexCreated{
    name: string = DEFINITION_CREATED_EVENT_NAME;
    createdBy: string;
    constructor(public aggregateID: string, public text: string){
        super();
    }
}
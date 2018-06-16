import { EdgeLinked } from "./edgelinked";

export var EQUIVALENT_LINKED_EVENT_NAME = "equivalent linked";

export class EquivalentLinked extends EdgeLinked{
    name: string = EQUIVALENT_LINKED_EVENT_NAME;
    constructor(public aggregateID: string, 
        public v1Id: string, public v1Type: string,
        public v2Id: string, public v2Type: string){
        super();
    }
}
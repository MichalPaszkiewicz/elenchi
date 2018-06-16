import { EdgeLinked } from "./edgelinked";

export var THEREFORE_LINKED_EVENT_NAME = "therefore linked";

export class ThereforeLinked extends EdgeLinked{
    name: string = THEREFORE_LINKED_EVENT_NAME;
    constructor(public aggregateID: string, 
        public v1Id: string, public v1Type: string,
        public v2Id: string, public v2Type: string){
        super();
    }
}
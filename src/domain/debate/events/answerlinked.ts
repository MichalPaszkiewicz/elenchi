import { EdgeLinked } from "./edgelinked";

export var ANSWER_LINKED_EVENT_NAME = "answer linked";

export class AnswerLinked extends EdgeLinked {
    name: string = ANSWER_LINKED_EVENT_NAME;
    
    constructor(public aggregateID: string, 
            public v1Id: string, public v1Type: string,
            public v2Id: string, public v2Type: string){
        super();
    }
}
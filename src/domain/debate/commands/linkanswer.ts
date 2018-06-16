import { LinkEdge } from "./linkedge";

export var LINK_ANSWER_COMMAND_NAME = "link answer";

export class LinkAnswer extends LinkEdge {
    name: string = LINK_ANSWER_COMMAND_NAME;

    constructor(public aggregateId: string, public v1Id: string, public v2Id: string){
        super();
    }
}
import { LinkEdge } from "./linkedge";

export var LINK_EQUIVALENT_COMMAND_NAME = "link equivalent";

export class LinkEquivalent extends LinkEdge {
    name: string = LINK_EQUIVALENT_COMMAND_NAME;

    constructor(public aggregateId: string, public v1Id: string, public v2Id: string){
        super();
    }
}
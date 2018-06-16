import { LinkEdge } from "./linkedge";

export var LINK_THEREFORE_COMMAND_NAME = "link therefore";

export class LinkTherefore extends LinkEdge{
    name: string = LINK_THEREFORE_COMMAND_NAME;
    constructor(public aggregateId: string, public v1Id: string, public v2Id: string){
        super();
    }
}
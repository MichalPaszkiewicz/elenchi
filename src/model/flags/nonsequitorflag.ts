import { Flag } from "./flag";
import { Guid } from "../objects/guid";

export var NON_SEQUITOR_FLAG_NAME = "non sequitor";

export class NonSequitor extends Flag {
    type: string = NON_SEQUITOR_FLAG_NAME;
    constructor(public vertexId: Guid){
        super();
    }
}
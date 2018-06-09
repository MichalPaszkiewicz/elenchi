import { Flag } from "./flag";
import { Guid } from "../objects/guid";

export var STRAW_MAN_FLAG_NAME = "straw man";

export class StrawManFlag extends Flag {
    type: string = STRAW_MAN_FLAG_NAME;
    constructor(public vertexId: Guid, public reason: string){
        super();
    }
}
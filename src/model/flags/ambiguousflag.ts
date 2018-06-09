import { Flag } from "./flag";
import { Guid } from "../objects/guid";

export var AMBIGUOUS_FLAG_NAME = "ambiguous";

export class AmbiguousFlag extends Flag {
    type: string = AMBIGUOUS_FLAG_NAME;
    constructor(public vertexId: Guid){
        super();
    }
}
import { Flag } from "./flag";
import { Guid } from "../objects/guid";

export var VULGAR_FLAG_NAME = "vulgar";

export class VulgarFlag extends Flag {
    type: string = VULGAR_FLAG_NAME;
    constructor(public vertexId: Guid){
        super();
    }
}
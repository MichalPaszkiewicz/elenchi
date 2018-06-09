import { Flag } from "./flag";
import { Guid } from "../objects/guid";

export var AD_HOMINEM_FLAG_NAME = "ad hominem";

export class AdHominemFlag extends Flag {
    type: string = AD_HOMINEM_FLAG_NAME;
    constructor(public vertexId: Guid){
        super();
    }
}
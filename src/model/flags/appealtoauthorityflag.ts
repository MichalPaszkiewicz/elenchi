import { Flag } from "./flag";
import { Guid } from "../objects/guid";

export var APPEAL_TO_AUTHORITY_FLAG_NAME = "appeal to authority";

export class AppealToAuthorityFlag extends Flag {
    type: string = APPEAL_TO_AUTHORITY_FLAG_NAME;
    constructor(public vertexId: Guid){
        super();
    }
}
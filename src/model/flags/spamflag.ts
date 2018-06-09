import { Flag } from "./flag";
import { Guid } from "../objects/guid";

export var SPAM_FLAG_NAME = "spam";

export class SpamFlag extends Flag {
    type: string = SPAM_FLAG_NAME;
    constructor(public vertexId: Guid){
        super();
    }
}
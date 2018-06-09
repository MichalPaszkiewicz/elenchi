import { Flag } from "./flag";
import { Guid } from "../objects/guid";

export var POST_HOC_FLAG_NAME = "post hoc";

export class PostHocFlag extends Flag {
    type: string = POST_HOC_FLAG_NAME;
    constructor(public vertexId: Guid){
        super();
    }
}
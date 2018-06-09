import { Flag } from "./flag";
import { Guid } from "../objects/guid";

export var AD_MISERICORDIAM_FLAG_NAME = "ad misericordiam";

export class AdMisericordiamFlag extends Flag {
    type: string = AD_MISERICORDIAM_FLAG_NAME;
    constructor(public vertexId: Guid){
        super();
    }
}
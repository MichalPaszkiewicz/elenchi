import { Flag } from "./flag";
import { Guid } from "../objects/guid";

export var AD_POPULUM_FLAG_NAME = "ad populum";

export class AdPopulumFlag extends Flag {
    type: string = AD_POPULUM_FLAG_NAME;
    constructor(public vertexId: Guid){
        super();
    }
}
import { Flag } from "./flag";
import { Guid } from "../objects/guid";

export var AD_PASSIONES_FLAG_NAME = "ad passiones";

export class AdPassionesFlag extends Flag {
    type: string = AD_PASSIONES_FLAG_NAME;
    constructor(public vertexId: Guid){
        super();
    }
}
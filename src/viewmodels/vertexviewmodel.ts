import { Framework } from "../model/objects/framework";
import { Flag } from "../model/flags/flag";
import { Guid } from "../model/objects/guid";

export class VertexViewModel{
    type: string;
    text: string;
    tags: Framework[];
    flags: Flag[];
    vertexId: Guid;
}
import { Edge } from "./edge";
import { EdgeType } from "./edgetype";

export class Equivalent extends Edge {
    type: EdgeType = EdgeType.Equivalent;
}
import { Edge } from "./edge";
import { EdgeType } from "./edgetype";

export class Response extends Edge {
    type: EdgeType = EdgeType.Response;
}
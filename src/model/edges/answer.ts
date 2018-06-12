import { Edge } from "./edge";
import { EdgeType } from "./edgetype";

export class Answer extends Edge {
    type: EdgeType = EdgeType.Answer;
}
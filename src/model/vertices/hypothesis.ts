import { Vertex } from "./vertex";

export var HYPOTHESIS_VERTEX_NAME = "hypothesis";

export class Hypothesis extends Vertex {
    type: string = HYPOTHESIS_VERTEX_NAME;
    text: string;
}
import { Vertex } from "./vertex";

export var THEOREM_VERTEX_NAME = "theorem";

export class Theorem extends Vertex {
    type: string = THEOREM_VERTEX_NAME;
    text: string;
}
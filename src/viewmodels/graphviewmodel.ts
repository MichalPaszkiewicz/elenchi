import { EdgeViewModel } from "./edgeviewmodel";
import { VertexViewModel } from "./vertexviewmodel";

export class GraphViewModel{
    constructor(
        public vertex: VertexViewModel,
        public parents: EdgeViewModel[], 
        public children: EdgeViewModel[], 
        public siblings: EdgeViewModel[]){

    }
}
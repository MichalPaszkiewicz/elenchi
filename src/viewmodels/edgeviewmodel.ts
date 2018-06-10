import { VertexViewModel } from "./vertexviewmodel";
import { EdgeType } from "../model/edges/edgetype";

export class EdgeViewModel{
    otherVertex: VertexViewModel;
    type: EdgeType;

    constructor(theOtherVertex: VertexViewModel, edgeType: EdgeType){
        this.otherVertex = theOtherVertex;
        this.type = edgeType;
    }
}
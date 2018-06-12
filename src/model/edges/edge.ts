import { Guid } from "../objects/guid";
import { EdgeType } from "./edgetype";

export abstract class Edge{
    abstract type: EdgeType;
    constructor(
        public id: Guid, 
        public vertex1Id: Guid, 
        public vertex2Id: Guid,
        public vertex1Type: string,
        public vertex2Type: string){
        
    }
}
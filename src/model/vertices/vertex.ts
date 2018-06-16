import { Guid } from "../objects//guid";
import { Framework } from "../objects/framework";
import { BaseGremlinVertex } from "../../entities/basegremlinvertex";

export abstract class Vertex{
    id: Guid;
    aggregateId: Guid;
    text: string;
    tags: Framework[] = [];    
    abstract type: string;
    userId: Guid;
}
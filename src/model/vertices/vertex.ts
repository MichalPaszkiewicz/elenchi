import { Guid } from "../objects//guid";
import { Framework } from "../objects/framework";

export abstract class Vertex{
    id: Guid;
    abstract text: string;
    tags: Framework[] = [];    
    abstract type: string;
    userId: Guid;
}
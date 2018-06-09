import { Guid } from "../objects/guid";

export abstract class Flag{
    abstract vertexId: Guid;
    abstract type: string;
    userId: string;
}
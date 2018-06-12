import {Equivalent} from "../edges/equivalent";
import { Answer } from "../edges/answer";
import {Therefore} from "../edges/therefore";
import { EdgeType } from "../edges/edgetype";

export type EdgeTypeType = typeof Equivalent 
    | typeof Answer 
    | typeof Therefore;

export class EdgeTypeMapper{
    static map(edgeType: EdgeType | string){
        switch(edgeType){
            case EdgeType.Answer:
                return Answer;
            case EdgeType.Equivalent:
                return Equivalent;
            case EdgeType.Therefore:
                return Therefore;
        }
    }
}
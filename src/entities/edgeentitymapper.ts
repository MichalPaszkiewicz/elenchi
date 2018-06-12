import { BaseGremlinEdge } from "./basegremlinedge";
import { Edge } from "../model/edges/edge";
import { EdgeTypeMapper } from "../model/mappers/edgetypemapper";
import { Guid } from "../model/objects/guid";
import { GremlinScript } from "./gremlinscript";

export class EdgeEntityMapper{
    static entityToEdge(bge: BaseGremlinEdge){
        var edge: Edge;
        edge = new (EdgeTypeMapper.map(bge.label))(
            new Guid(bge.id), 
            new Guid(bge.inV), 
            new Guid(bge.outV),
            bge.inVLabel,
            bge.outVLabel);
        return edge;
    }
    static edgeToGremlinScript(edge: Edge): GremlinScript{
        var vertex1 = GremlinScript.vertices()
            .hasLabel(edge.vertex1Type)
            .has("id", edge.vertex1Id.toString());
        var vertex2 = GremlinScript.vertices()
            .hasLabel(edge.vertex2Type)
            .has("id", edge.vertex2Id.toString());
        var dbScript = vertex1
            .addE(edge.type)
            .to(vertex2);
        return dbScript;
    }
}
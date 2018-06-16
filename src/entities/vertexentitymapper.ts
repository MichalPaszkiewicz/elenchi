import { BaseGremlinVertex } from "./basegremlinvertex";
import {AXIOM_VERTEX_NAME, Axiom} from "../model/vertices/axiom";
import { Vertex } from "../model/vertices/vertex";
import { Guid } from "../model/objects/guid";
import { VertexTypeMapper, VertexType } from "../model/mappers/vertextypemapper";
import { FACT_VERTEX_NAME, Fact } from "../model/vertices/fact";
import { GremlinScript } from "./gremlinscript";

export class VertexEntityMapper{
    static entityToVertex(bgv: BaseGremlinVertex): Vertex{
        var vertex: Vertex;
        vertex = new (VertexTypeMapper.map(bgv.label))();
        switch(bgv.label){
            case FACT_VERTEX_NAME:
                (<Fact>vertex).evidence = bgv.properties.userId[0].value;
                break;
        }
        vertex.aggregateId = new Guid(bgv.aggregateId);
        vertex.id = new Guid(bgv.id);
        vertex.userId = new Guid(bgv.properties.userId[0].value);
        vertex.tags = bgv.properties.tags.split(",");
        return vertex;
    }
    static vertexToGremlinScript(vertex: Vertex): GremlinScript{
        var dbScript = GremlinScript.vertices().addV(vertex.type)
            .property("aggregateId", vertex.aggregateId.toString())
            .property("id", vertex.id.toString())
            .property("tags", vertex.tags.join(","))
            .property("userId", vertex.userId.toString())
            .property("text", vertex.text);
            
        switch(vertex.type){
            case FACT_VERTEX_NAME:
                dbScript = dbScript.property("evidence", (<Fact>vertex).evidence);
                break;
        }
        return dbScript;
    }
}
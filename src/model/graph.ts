import { Vertex } from "./vertices/vertex";
import { Edge } from "./edges/edge";
import { Guid } from "./objects/guid";
import { EdgeType } from "./edges/edgetype";

export class Graph{
    constructor(public vertices: Vertex[], public edges: Edge[]){
        
    }

    addVertex(vertex: Vertex){
        this.vertices.push(vertex);
    }

    addEdge(edge: Edge){
        this.edges.push(edge);
    }

    subGraph(vertex: Vertex, distance: number){
        var self = this;
        var firstEdges = self.edges.filter(e => e.vertex1Id.equals(vertex.id));
        var secondEdges = self.edges.filter(e => e.vertex2Id.equals(vertex.id));

        var firstVertices = firstEdges.map(fe => self.getVertex(fe.vertex2Id));
        var secondVertices = secondEdges.map(fe => self.getVertex(fe.vertex1Id));

        return new Graph(firstVertices.concat(secondVertices), firstEdges.concat(secondEdges));
    }

    getVertex(id: Guid){
        for(var i = 0; i < this.vertices.length; i++){
            if(this.vertices[i].id.equals(id)){
                return this.vertices[i];
            }
        }
        return null;
    }

    getEdgesOfType(type: EdgeType){
        return this.edges.filter(e => e.type == type);
    }

    getChildren(vertex: Vertex, edgeType?: EdgeType){
        var self = this;
        return self.edges
            .filter(e => e.vertex1Id.equals(vertex.id))
            .filter(e => edgeType == null || e.type == edgeType)
            .map(e => self.getVertex(e.vertex2Id));
    }

    getDescendants(vertex: Vertex, depth: number, edgeType?: EdgeType): Vertex[]{
        var self = this;
        var children = self.getChildren(vertex, edgeType);
        if(depth == 1){
            return children;
        }
        var total: Vertex[] = [];
        for(var i = 0; i < children.length; i++){
            total = total.concat(self.getDescendants(children[i], depth - 1, edgeType));
        }
        var uniqueTotal = [];
        var ids = {};
        for(var i = 0; i < total.length; i++){
            if(!ids[total[i].id.toString()]){
                uniqueTotal.push(total[i]);
                ids[total[i].id.toString()] = true;
            }
        }
        return uniqueTotal;
    }

    getParents(vertex: Vertex, edgeType?: EdgeType){
        var self = this;
        return self.edges
            .filter(e => e.vertex2Id.equals(vertex.id))
            .filter(e => edgeType == null || e.type == edgeType)            
            .map(e => self.getVertex(e.vertex1Id));
    }

    getAncestors(vertex: Vertex, depth: number, edgeType?: EdgeType){
        var self = this;
        var parents = self.getParents(vertex, edgeType);
        if(depth == 1){
            return parents;
        }
        var total: Vertex[] = [];
        for(var i = 0; i < parents.length; i++){
            total = total.concat(self.getAncestors(parents[i], depth - 1, edgeType));
        }
        var uniqueTotal = [];
        var ids = {};
        for(var i = 0; i < total.length; i++){
            if(!ids[total[i].id.toString()]){
                uniqueTotal.push(total[i]);
                ids[total[i].id.toString()] = true;
            }
        }
        return uniqueTotal;
    }
}
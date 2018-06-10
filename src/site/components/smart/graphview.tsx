import React from "react";
import { GraphViewModel } from "../../../viewmodels/graphviewmodel";
import { VertexView } from "./vertexview";
import { VertexGallery } from "./vertexgallery";
import { EdgeGallery } from "./edgegallery";
import { Guid } from "../../../model/objects/guid";

export class GraphViewProps{
    graphViewModel: GraphViewModel;
    onSelectVertex: (vertexId: Guid) => void;
}

export class GraphView extends React.Component<GraphViewProps, null>{
    render(){
        var self = this;
        return (
            <div className="graph-container">
                <VertexGallery 
                    vertices={self.props.graphViewModel.parents.map(p => p.otherVertex)} 
                    onSelectVertex={(vertexId) => {self.props.onSelectVertex(vertexId)}}/>
                <EdgeGallery edges={self.props.graphViewModel.parents} />
                <div>
                    <VertexView vertex={ self.props.graphViewModel.vertex } onSelect={() => {}}/>
                    <EdgeGallery edges={self.props.graphViewModel.siblings} />
                    <VertexGallery 
                        vertices={self.props.graphViewModel.siblings.map(p => p.otherVertex)} 
                        onSelectVertex={(vertexId) => {self.props.onSelectVertex(vertexId)}}/>                
                </div>
                <EdgeGallery edges={self.props.graphViewModel.children} />
                <VertexGallery 
                    vertices={self.props.graphViewModel.children.map(p => p.otherVertex)}
                    onSelectVertex={(vertexId) => {self.props.onSelectVertex(vertexId)}}/>                    
            </div>
        )
    }
}
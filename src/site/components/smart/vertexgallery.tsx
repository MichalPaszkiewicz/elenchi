import React from "react";
import { VertexViewModel } from "../../../viewmodels/vertexviewmodel";
import { VertexView } from "./vertexview";
import { Guid } from "../../../model/objects/guid";

export class VertexGalleryProps{
    vertices: VertexViewModel[];
    onSelectVertex: (vertexId: Guid) => void;
}

export class VertexGallery extends React.Component<VertexGalleryProps, null>{
    render(){
        var self = this;
        return (
            <div className="vertex-gallery">
                {
                    self.props.vertices.map(v => 
                        <VertexView vertex={v} onSelect={() => self.props.onSelectVertex(v.vertexId)}/>
                    )
                }
            </div>
        )
    }
}
import React from "react";
import { EdgeViewModel } from "../../../viewmodels/edgeviewmodel";
import {EdgeView} from "./edgeview";

export class EdgeGalleryProps{
    edges: EdgeViewModel[];
}

export class EdgeGallery extends React.Component<EdgeGalleryProps, null>{
    render(){
        var self = this;
        return (
            <div className="edge-gallery">
                {
                    self.props.edges.map(e => <EdgeView edge={e} />)
                }
            </div>
        )
    }
}
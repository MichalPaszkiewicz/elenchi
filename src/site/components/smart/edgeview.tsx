import React from "react";
import { Edge } from "../../../model/edges/edge";
import { EdgeType } from "../../../model/edges/edgetype";
import { ThereforeEdgeView } from "./thereforeedgeview";
import { EdgeViewModel } from "../../../viewmodels/edgeviewmodel";

export class EdgeViewProps{
    edge: EdgeViewModel
}

export class EdgeView extends React.Component<EdgeViewProps, null>{
    render(){
        var self = this;
        switch(self.props.edge.type){
            case EdgeType.Therefore:
                return (
                    <ThereforeEdgeView edge={self.props.edge} />
                );
            default:
                return (
                    <div className="edge-container">
        
                    </div>
                );
        }
    }
}
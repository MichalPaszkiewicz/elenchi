import React from "react";
import { EdgeViewModel } from "../../../viewmodels/edgeviewmodel";

export class ThereforeEdgeViewProps{
    edge: EdgeViewModel;
}

export class ThereforeEdgeView extends React.Component<ThereforeEdgeViewProps, null>{
    render(){
        var self = this;
        return (
            <div className="edge-container">
                
            </div>
        )
    }
}
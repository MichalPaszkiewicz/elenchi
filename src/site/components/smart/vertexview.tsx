import * as React from 'react';
import {Vertex} from "../../../model/vertices/vertex";
import { TagView } from './tagview';
import {Flag} from "../../../model/flags/flag";
import { CumulativeFlagView } from './cumulativeflagsview';
import { Button } from '../pretty/button';
import { VertexViewModel } from '../../../viewmodels/vertexviewmodel';

export class VertexViewProps{
    vertex: VertexViewModel;
    onSelect: (e?: any) => void;
}

export class VertexView extends React.Component<VertexViewProps, null>{
    render(){
        var self = this;
        return (
            <div className="vertex-container">
                <div>{self.props.vertex.type}</div>
                <div>{self.props.vertex.text}</div>
                <div>
                    {
                        self.props.vertex.tags.map(t => <TagView tag={t} />)
                    }
                </div>
                <div>
                    <CumulativeFlagView flags={self.props.vertex.flags} />
                </div>
                <div>
                    <Button>Reply</Button>
                    <Button>Flag</Button>
                </div>
            </div>
        )
    }
}
import * as React from 'react';
import { Framework } from '../../../model/objects/framework';

export class TagViewProps{
    tag: Framework
}

export class TagView extends React.Component<TagViewProps, null>{
    render(){
        var self = this;
        return (
            <div className="tag-container">
                {
                    self.props.tag
                }
            </div>
        )
    }
}
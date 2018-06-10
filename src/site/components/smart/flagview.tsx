import * as React from 'react';
import { Flag } from '../../../model/flags/flag';
import { FlagIconMapper } from '../../mappers/flagiconmapper';

export class FlagViewProps{
    flag: Flag
}

export class FlagView extends React.Component<FlagViewProps, null>{
    render(){
        var self = this;
        return (
            <div className="flag-container">
                <span className={"flag-icon " + FlagIconMapper.map(self.props.flag.type)}></span>
                {self.props.flag.type}
            </div>
        )
    }
}
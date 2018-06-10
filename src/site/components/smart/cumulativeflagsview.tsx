import * as React from 'react';
import { Flag } from '../../../model/flags/flag';
import { FlagView } from './flagview';

export class CumulativeFlagViewProps{
    flags: Flag[];
}

export class CumulativeFlagView extends React.Component<CumulativeFlagViewProps, null>{
    render(){
        var self = this;
        return (
            <div className="cumulative-flag-container">
                {
                    self.props.flags.map(f => <FlagView flag={f} />)
                }
            </div>
        )
    }
}
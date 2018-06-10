import * as React from 'react';

export class ButtonProps{
}

export class Button extends React.Component<ButtonProps, null>{
    render(){
        var self = this;
        return (
            <button>
                {
                    self.props.children
                }
            </button>
        )
    }
}
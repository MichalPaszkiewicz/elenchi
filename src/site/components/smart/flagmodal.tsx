import React from "react";
import {Modal} from "michals-react-components";

export class FlagModalProps{
    show: boolean;
    onClose: (e?: any) => void;
}

export class FlagModal extends React.Component<FlagModalProps, null>{
    render(){
        var self = this;
        return (
            <Modal title="Flag statement" show={self.props.show} onClose={self.props.onClose} />
        )
    }
}
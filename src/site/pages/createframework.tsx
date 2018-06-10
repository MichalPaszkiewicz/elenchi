import React from "react";

export class CreateFrameworkPageProps{

}

export class CreateFrameworkPageState{

}

export class CreateFrameworkPage extends React.Component<CreateFrameworkPageProps, CreateFrameworkPageState>{
    render(){
        var self = this;
        return (
            <div className="create-framework-page page-container">
                <h1>Create new framework</h1>
            </div>
        )
    }
}
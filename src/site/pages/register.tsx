import React from "react";

export class RegisterPageProps{

}

export class RegisterPageState{

}

export class RegisterPage extends React.Component<RegisterPageProps, RegisterPageState>{
    render(){
        var self = this;
        return (
            <div className="register-page page-container">
                <h1>Register</h1>
            </div>
        )
    }
}
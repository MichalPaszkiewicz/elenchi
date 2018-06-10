import React from "react";

export class LoginPageProps{

}

export class LoginPageState{

}

export class LoginPage extends React.Component<LoginPageProps, LoginPageState>{
    render(){
        var self = this;
        return (
            <div className="login-page page-container">
                <h1>Login</h1>
            </div>
        )
    }
}
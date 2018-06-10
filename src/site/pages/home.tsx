import React from "react";

export class HomePageProps{

}

export class HomePageState{

}

export class HomePage extends React.Component<HomePageProps, HomePageState>{
    render(){
        var self = this;
        return (
            <div className="home-page page-container">
                <h1>Home</h1>
            </div>
        )
    }
}
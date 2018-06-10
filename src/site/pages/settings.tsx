import React from "react";

export class SettingsPageProps{

}

export class SettingsPageState{

}

export class SettingsPage extends React.Component<SettingsPageProps, SettingsPageState>{
    render(){
        var self = this;
        return (
            <div className="settings-page page-container">
                <h1>Settings</h1>
            </div>
        )
    }
}
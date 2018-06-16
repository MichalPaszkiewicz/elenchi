declare var require: (txt: string) => any;

var fs = require("fs");

export class Settings{
    private static _instance: Settings;
    static Instance(): Settings{
        if(Settings._instance == null){
            Settings._instance = new Settings();
        }
        return Settings._instance;
    }

    gremlinDataStoreUrl: string;
    gremlinDataStorePort: number;
    gremlinDataStoreUser: string;
    gremlinDataStorePassword: string;

    constructor(){
        var filePath = "../settings.json";
        var data = fs.readFileSync(filePath, "utf-8");
    }
}
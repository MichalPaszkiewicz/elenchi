import * as gremlin from "gremlin";
import { Guid } from "../model/objects/guid";
import { GremlinScript } from "./gremlinscript";
import {Settings} from "../settings";

var client = gremlin.createClient(
    Settings.Instance().gremlinDataStorePort, 
    Settings.Instance().gremlinDataStoreUrl, 
    {
        password: Settings.Instance().gremlinDataStorePassword, 
        ssl: true, 
        session: true, 
        user:Settings.Instance().gremlinDataStoreUser
    }
);

export class GremlinDataStore{
    static onError(err){
        if(err){
            console.error(JSON.stringify(err));
        }
    }
    static getVerticesCount(callback: (count: number) => void){
        this.runScript(GremlinScript.vertices().count(), callback);
    }
    static getEdgesCount(callback: (count: number) => void){
        this.runScript(GremlinScript.edges().count(), callback);
    }
    static getUserVertices(userId: Guid, callback: (results) => void){
        this.runScript(GremlinScript.vertices().has("userId", userId.toString()), callback);
    }
    static getVertexById(id: Guid, callback: (results) => void){
        this.runScript(GremlinScript.vertices().has("id", id.toString()), callback);
    }
    static runScript(script: GremlinScript, callback: (results) => void){
        client.execute(script.toString(), (err, results) => {
            GremlinDataStore.onError(err);
            callback(results);
        });
    }
}
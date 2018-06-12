import * as gremlin from "gremlin";
import { Guid } from "../model/objects/guid";
import { GremlinScript } from "./gremlinscript";

var client = gremlin.createClient(

);

export class GremlinDataStore{
    static onError(err){
        if(err){
            console.error(JSON.stringify(err));
        }
    }
    static getVerticesCount(callback: (count: number) => void){
        client.execute("g.V().count()", {}, (err, results) => {
            GremlinDataStore.onError(err);
            callback(results[0]);
        });
    }
    static getEdgesCount(callback: (count: number) => void){
        client.execute("g.E().count()", {}, (err, results) => {
            GremlinDataStore.onError(err);
            callback(results[0]);
        });
    }
    static getUserVertices(userId: Guid, callback: (results) => void){
        client.execute(`g.V().has('userId',${userId.toString()})`, {}, (err, results) => {
            GremlinDataStore.onError(err);
            callback(results);
        });
    }
    static runScript(script: GremlinScript, callback: (results) => void){
        client.execute(script.toString(), (err, results) => {
            GremlinDataStore.onError(err);
            callback(results);
        });
    }
}
import {IAmACommand} from "cqrs-with-es";

export var CREATE_VERTEX_COMMAND_NAME = "create vertex";

export abstract class CreateVertex implements IAmACommand {
    abstract name: string;

    constructor(public debateId: string, public text: string){
        
    }
}
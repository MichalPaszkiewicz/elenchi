import {IAmACommand} from "cqrs-with-es";
import { CreateVertex } from "./createvertex";

export var CREATE_DEFINITION_COMMAND_NAME = "create definition";

export class CreateDefinition extends CreateVertex {
    name: string = CREATE_DEFINITION_COMMAND_NAME;

    constructor(public debateId: string, public text: string){
        super(debateId, text);
    }
}
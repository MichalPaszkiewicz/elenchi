import {IAmACommand} from "cqrs-with-es";
import { CreateVertex } from "./createvertex";

export var CREATE_OPINION_COMMAND_NAME = "create opinion";

export class CreateOpinion extends CreateVertex {
    name: string = CREATE_OPINION_COMMAND_NAME;

    constructor(public debateId: string, public text: string){
        super(debateId, text);
    }
}
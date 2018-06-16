import {IAmACommand} from "cqrs-with-es";
import { CreateVertex } from "./createvertex";

export var CREATE_CONCLUSION_COMMAND_NAME = "create conclusion";

export class CreateConclusion extends CreateVertex {
    name: string = CREATE_CONCLUSION_COMMAND_NAME;

    constructor(public debateId: string, public text: string){
        super(debateId, text);
    }
}
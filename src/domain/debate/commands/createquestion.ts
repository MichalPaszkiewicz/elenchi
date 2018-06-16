import {IAmACommand} from "cqrs-with-es";
import { CreateVertex } from "./createvertex";

export var CREATE_QUESTION_COMMAND_NAME = "create question";

export class CreateQuestion extends CreateVertex{
    name: string;

    constructor(public debateId: string, public text: string){
        super(debateId, text);
    }
}
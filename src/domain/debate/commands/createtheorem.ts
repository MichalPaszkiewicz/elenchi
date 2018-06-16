import {IAmACommand} from "cqrs-with-es";
import { CreateVertex } from "./createvertex";

export var CREATE_THEOREM_COMMAND_NAME = "create theorem";

export class CreateTheorem extends CreateVertex {
    name: string = CREATE_THEOREM_COMMAND_NAME;

    constructor(public debateId: string, public text: string){
        super(debateId, text);
    }
}
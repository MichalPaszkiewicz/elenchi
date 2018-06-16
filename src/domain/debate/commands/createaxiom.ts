import {IAmACommand} from "cqrs-with-es";
import { CreateVertex } from "./createvertex";

export var CREATE_AXIOM_COMMAND_NAME = "create axiom";

export class CreateAxiom extends CreateVertex {
    name: string = CREATE_AXIOM_COMMAND_NAME

    constructor(public debateId: string, public text: string){
        super(debateId, text);
    }
}
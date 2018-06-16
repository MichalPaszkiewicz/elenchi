import {IAmACommand} from "cqrs-with-es";
import { CreateVertex } from "./createvertex";

export var CREATE_FACT_COMMAND_NAME = "create fact";

export class CreateFact extends CreateVertex {
    name: string = CREATE_FACT_COMMAND_NAME;

    constructor(public debateId: string, public text: string, public evidence: string){
        super(debateId, text);
    }
}

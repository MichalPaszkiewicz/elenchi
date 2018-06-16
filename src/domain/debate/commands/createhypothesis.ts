import {IAmACommand} from "cqrs-with-es";
import { CreateVertex } from "./createvertex";

export var CREATE_HYPOTHESIS_COMMAND_NAME = "create hypothesis";

export class CreateHypothesis extends CreateVertex {
    name: string = CREATE_HYPOTHESIS_COMMAND_NAME;

    constructor(public debateId: string, public text: string){
        super(debateId, text);
    }
}

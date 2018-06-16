import {IAmACommandHandler, IAmACommand, DomainService, View} from "cqrs-with-es";
import { CREATE_AXIOM_COMMAND_NAME } from "./commands/createaxiom";
import { CREATE_CONCLUSION_COMMAND_NAME } from "./commands/createconclusion";
import { CREATE_DEFINITION_COMMAND_NAME } from "./commands/createdefinition";
import { CREATE_FACT_COMMAND_NAME, CreateFact } from "./commands/createfact";
import { CREATE_HYPOTHESIS_COMMAND_NAME } from "./commands/createhypothesis";
import { CREATE_OPINION_COMMAND_NAME } from "./commands/createopinion";
import { CREATE_QUESTION_COMMAND_NAME } from "./commands/createquestion";
import { CREATE_THEOREM_COMMAND_NAME } from "./commands/createtheorem";
import { CreateVertex } from "./commands/createvertex";
import { DebateAggregateRoot } from "./debateaggregate";

export class VertexCommandHandler implements IAmACommandHandler {
    commandNames: string[] = [
        CREATE_AXIOM_COMMAND_NAME,
        CREATE_CONCLUSION_COMMAND_NAME,
        CREATE_DEFINITION_COMMAND_NAME,
        CREATE_FACT_COMMAND_NAME,
        CREATE_HYPOTHESIS_COMMAND_NAME,
        CREATE_OPINION_COMMAND_NAME,
        CREATE_QUESTION_COMMAND_NAME,
        CREATE_THEOREM_COMMAND_NAME
    ]
    handle(command: CreateVertex, 
            domainService: DomainService, 
            callback: (command: IAmACommand) => void, 
            getViewByName?: (name: string, viewCallBack: (view: View) => void) => void): void {
        domainService.getAggregateRoot(DebateAggregateRoot, (ar) => {
            switch(command.name){
                case CREATE_AXIOM_COMMAND_NAME:
                    ar.createAxiom(command);
                    return;
                case CREATE_CONCLUSION_COMMAND_NAME:
                    ar.createConclusion(command);
                    return;
                case CREATE_DEFINITION_COMMAND_NAME:
                    ar.createDefinition(command);
                    return;
                case CREATE_FACT_COMMAND_NAME:
                    ar.createFact(<CreateFact>command);
                    return;
                case CREATE_HYPOTHESIS_COMMAND_NAME:
                    ar.createHypothesis(command);
                    return;
                case CREATE_OPINION_COMMAND_NAME:
                    ar.createOpinion(command);
                    return;
                case CREATE_QUESTION_COMMAND_NAME:
                    ar.createQuestion(command);
                    return;
                case CREATE_THEOREM_COMMAND_NAME:
                    ar.createTheorem(command);
                    return;
                default:
                    return;
            }
        }, command.debateId);
    }
}
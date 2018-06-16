import { IAmACommandHandler, DomainService, View } from "cqrs-with-es";
import { LINK_ANSWER_COMMAND_NAME } from "./commands/linkanswer";
import {LINK_EQUIVALENT_COMMAND_NAME} from "./commands/linkequivalent";
import {LINK_THEREFORE_COMMAND_NAME} from "./commands/linktherefore";
import { LinkEdge } from "./commands/linkedge";
import { DebateAggregateRoot } from "./debateaggregate";

export class EdgeCommandHandler implements IAmACommandHandler {
    commandNames: string[] = [
        LINK_ANSWER_COMMAND_NAME,
        LINK_EQUIVALENT_COMMAND_NAME,
        LINK_THEREFORE_COMMAND_NAME
    ]
    handle(command: LinkEdge, domainService: DomainService, 
            callback: (command: LinkEdge) => void, 
            getViewByName?: (name: string, viewCallBack: (view: View) => void) => void): void {
        domainService.getAggregateRoot(DebateAggregateRoot, (ar) => {
            switch(command.name){
                case LINK_ANSWER_COMMAND_NAME:
                    ar.linkAnswer(command);
                    return;
                case LINK_EQUIVALENT_COMMAND_NAME:
                    ar.linkEquivalent(command);
                    return;
                case LINK_THEREFORE_COMMAND_NAME:
                    ar.linkTherefore(command);
                    return;
                default:
                    return;
            }
        }, command.aggregateId);
    }
}
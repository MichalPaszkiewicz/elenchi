import {IAmACommand} from "cqrs-with-es";

export abstract class LinkEdge implements IAmACommand {
    abstract name: string;
    abstract aggregateId: string;
    abstract v1Id: string;
    abstract v2Id: string;
}
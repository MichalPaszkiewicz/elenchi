import { AuditedEvent } from "cqrs-with-es";
import { Guid } from "../../../model/objects/guid";

export abstract class EdgeLinked extends AuditedEvent {
    abstract name: string;
    abstract aggregateID: string;
    edgeId: string = Guid.NewGuid().toString();
    abstract v1Id: string;
    abstract v1Type: string;
    abstract v2Id: string;
    abstract v2Type: string;
    createdBy: string;
}
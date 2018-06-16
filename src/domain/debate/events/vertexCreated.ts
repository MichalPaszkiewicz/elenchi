import {AuditedEvent} from "cqrs-with-es";
import { Guid } from "../../../model/objects/guid";

export abstract class VertexCreated extends AuditedEvent{
    id: Guid = Guid.NewGuid();
}
import { View, IAmADomainEvent } from "cqrs-with-es";
import { ANSWER_LINKED_EVENT_NAME } from "./events/answerlinked";
import { AXIOM_CREATED_EVENT_NAME } from "./events/axiomcreated";
import { CONCLUSION_CREATED_EVENT_NAME } from "./events/conclusioncreated";
import { DEFINITION_CREATED_EVENT_NAME } from "./events/definitioncreated";
import { EQUIVALENT_LINKED_EVENT_NAME } from "./events/equivalentlinked";
import { FACT_CREATED_EVENT_NAME } from "./events/factcreated";
import { HYPOTHESIS_CREATED_EVENT_NAME } from "./events/hypothesiscreated";
import { OPINION_CREATED_EVENT_NAME } from "./events/opinioncreated";
import { QUESTION_CREATED_EVENT_NAME } from "./events/questioncreated";
import { THEOREM_CREATED_EVENT_NAME } from "./events/theoremcreated";
import { THEREFORE_LINKED_EVENT_NAME } from "./events/thereforelinked";
import { GremlinDataStore } from "../../entities/gremlindatastore";
import { EventEdgeMapper } from "./eventedgemapper";
import { EdgeLinked } from "./events/edgelinked";
import { EdgeEntityMapper } from "../../entities/edgeentitymapper";
import { EventVertexMapper } from "./eventvertexmapper";
import { VertexCreated } from "./events/vertexCreated";
import { VertexEntityMapper } from "../../entities/vertexentitymapper";

export var DEBATE_VIEW_NAME = "debate view";

export class DebateView extends View {
    name: string = DEBATE_VIEW_NAME;
    handle(event: IAmADomainEvent) {
        switch(event.name){
            case ANSWER_LINKED_EVENT_NAME:
            case EQUIVALENT_LINKED_EVENT_NAME:
            case THEREFORE_LINKED_EVENT_NAME:
                var edge = EventEdgeMapper.map(<EdgeLinked>event);
                var script = EdgeEntityMapper.edgeToGremlinScript(edge);
                GremlinDataStore.runScript(script, () => {});
                return;
            case AXIOM_CREATED_EVENT_NAME:
            case CONCLUSION_CREATED_EVENT_NAME:
            case DEFINITION_CREATED_EVENT_NAME:
            case FACT_CREATED_EVENT_NAME:
            case HYPOTHESIS_CREATED_EVENT_NAME:
            case OPINION_CREATED_EVENT_NAME:
            case QUESTION_CREATED_EVENT_NAME:
            case THEOREM_CREATED_EVENT_NAME:
                var vertex = EventVertexMapper.map(<VertexCreated>event);
                var script = VertexEntityMapper.vertexToGremlinScript(vertex);
                GremlinDataStore.runScript(script, () => {});
                return;
            default:
                return;
        }
    }
}
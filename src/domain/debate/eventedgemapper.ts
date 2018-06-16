import { EdgeLinked } from "./events/edgelinked";
import { ANSWER_LINKED_EVENT_NAME, AnswerLinked } from "./events/answerlinked";
import { Guid } from "../../model/objects/guid";
import { Answer } from "../../model/edges/answer";
import { EQUIVALENT_LINKED_EVENT_NAME, EquivalentLinked } from "./events/equivalentlinked";
import { Equivalent } from "../../model/edges/equivalent";
import { THEREFORE_LINKED_EVENT_NAME, ThereforeLinked } from "./events/thereforelinked";
import { Therefore } from "../../model/edges/therefore";

export class EventEdgeMapper {
    static map(event: EdgeLinked) {
        switch (event.name) {
            case ANSWER_LINKED_EVENT_NAME:
                var answerLinked = <AnswerLinked>event;
                var answer = new Answer(new Guid(answerLinked.edgeId),
                    new Guid(answerLinked.v1Id),
                    new Guid(answerLinked.v2Id),
                    answerLinked.v1Type,
                    answerLinked.v2Type);
                return answer;
            case EQUIVALENT_LINKED_EVENT_NAME:
                var equivalentLinked = <EquivalentLinked>event;
                var equivalent = new Equivalent(new Guid(equivalentLinked.edgeId),
                    new Guid(equivalentLinked.v1Id),
                    new Guid(equivalentLinked.v2Id),
                    equivalentLinked.v1Type,
                    equivalentLinked.v2Type);
                return equivalent;
            case THEREFORE_LINKED_EVENT_NAME:
                var thereforeLinked = <ThereforeLinked>event;
                var therefore = new Therefore(new Guid(thereforeLinked.edgeId),
                    new Guid(thereforeLinked.v1Id),
                    new Guid(thereforeLinked.v2Id),
                    thereforeLinked.v1Type,
                    thereforeLinked.v2Type);
                return therefore;
            default:
                return null;
        }
    }
}
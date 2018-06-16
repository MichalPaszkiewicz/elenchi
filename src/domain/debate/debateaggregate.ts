import {AggregateRoot, IAmADomainEvent} from "cqrs-with-es";
import { CreateAxiom } from "./commands/createaxiom";
import {CreateConclusion} from "./commands/createconclusion";
import {CreateDefinition} from "./commands/createdefinition";
import {CreateFact} from "./commands/createfact";
import {CreateHypothesis} from "./commands/createhypothesis";
import {CreateOpinion} from "./commands/createopinion";
import {CreateQuestion} from "./commands/createquestion";
import {CreateTheorem} from "./commands/createtheorem";
import { AxiomCreated, AXIOM_CREATED_EVENT_NAME } from "./events/axiomcreated";
import {ConclusionCreated, CONCLUSION_CREATED_EVENT_NAME} from "./events/conclusioncreated";
import {DefinitionCreated, DEFINITION_CREATED_EVENT_NAME} from "./events/definitioncreated";
import {FactCreated, FACT_CREATED_EVENT_NAME} from "./events/factcreated";
import {HypothesisCreated, HYPOTHESIS_CREATED_EVENT_NAME} from "./events/hypothesiscreated";
import {OpinionCreated, OPINION_CREATED_EVENT_NAME} from "./events/opinioncreated";
import {QuestionCreated, QUESTION_CREATED_EVENT_NAME} from "./events/questioncreated";
import {TheoremCreated, THEOREM_CREATED_EVENT_NAME} from "./events/theoremcreated";
import {Graph} from "../../model/graph";
import {Axiom} from "../../model/vertices/axiom";
import {Conclusion} from "../../model/vertices/conclusion";
import {Definition} from "../../model/vertices/definition";
import {Fact} from "../../model/vertices/fact";
import {Hypothesis} from "../../model/vertices/hypothesis";
import {Opinion} from "../../model/vertices/opinion";
import {Question, QUESTION_VERTEX_NAME} from "../../model/vertices/question";
import {Theorem} from "../../model/vertices/theorem";
import { Guid } from "../../model/objects/guid";
import { LinkAnswer } from "./commands/linkanswer";
import { LinkEquivalent } from "./commands/linkequivalent";
import { LinkTherefore } from "./commands/linktherefore";
import { AnswerLinked, ANSWER_LINKED_EVENT_NAME } from "./events/answerlinked";
import { EquivalentLinked, EQUIVALENT_LINKED_EVENT_NAME } from "./events/equivalentlinked";
import { ThereforeLinked, THEREFORE_LINKED_EVENT_NAME } from "./events/thereforelinked";
import { Answer } from "../../model/edges/answer";
import { Equivalent } from "../../model/edges/equivalent";
import { Therefore } from "../../model/edges/therefore";
import { EventEdgeMapper } from "./eventedgemapper";
import { EdgeLinked } from "./events/edgelinked";
import { EventVertexMapper } from "./eventvertexmapper";
import { VertexCreated } from "./events/vertexCreated";

export class DebateAggregateRoot extends AggregateRoot {

    graph: Graph;

    constructor(id: string){
        super(id);
        this.graph = new Graph([], []);
    }

    createAxiom(command: CreateAxiom){
        var self = this;
        self.storeEvent(new AxiomCreated(self.ID, command.text));        
    }

    createConclusion(command: CreateConclusion){
        var self = this;
        self.storeEvent(new ConclusionCreated(self.ID, command.text));
    }

    createDefinition(command: CreateDefinition){
        var self = this;
        self.storeEvent(new DefinitionCreated(self.ID, command.text));
    }

    createFact(command: CreateFact){
        var self = this;
        self.storeEvent(new FactCreated(self.ID, command.text, command.evidence));
    }

    createHypothesis(command: CreateHypothesis){
        var self = this;
        self.storeEvent(new HypothesisCreated(self.ID, command.text));
    }

    createOpinion(command: CreateOpinion){
        var self = this;
        self.storeEvent(new OpinionCreated(self.ID, command.text));
    }

    createQuestion(command: CreateQuestion){
        var self = this;
        self.storeEvent(new QuestionCreated(self.ID, command.text));
    }

    createTheorem(command: CreateTheorem){
        var self = this;
        self.storeEvent(new TheoremCreated(self.ID, command.text));
    }

    linkAnswer(command: LinkAnswer){
        var self = this;
        self.storeEvent(new AnswerLinked(self.ID, 
            command.v1Id, self.graph.getVertex(new Guid(command.v1Id)).type,
            command.v2Id, self.graph.getVertex(new Guid(command.v2Id)).type));
    }

    linkEquivalent(command: LinkEquivalent){
        var self = this;
        self.storeEvent(new EquivalentLinked(self.ID, 
            command.v1Id, self.graph.getVertex(new Guid(command.v1Id)).type,
            command.v2Id, self.graph.getVertex(new Guid(command.v2Id)).type));
    }

    linkTherefore(command: LinkTherefore){
        var self = this;
        self.storeEvent(new ThereforeLinked(self.ID, 
            command.v1Id, self.graph.getVertex(new Guid(command.v1Id)).type,
            command.v2Id, self.graph.getVertex(new Guid(command.v2Id)).type));
    }

    applyEvent(event: IAmADomainEvent) {
        var self = this;
        switch(event.name){
            case AXIOM_CREATED_EVENT_NAME:
            case CONCLUSION_CREATED_EVENT_NAME:
            case DEFINITION_CREATED_EVENT_NAME:
            case FACT_CREATED_EVENT_NAME:
            case HYPOTHESIS_CREATED_EVENT_NAME:
            case OPINION_CREATED_EVENT_NAME:
            case QUESTION_CREATED_EVENT_NAME:
            case THEOREM_CREATED_EVENT_NAME:
                var vertex = EventVertexMapper.map(<VertexCreated>event);
                self.graph = self.graph.addVertex(vertex);
                return;
            case ANSWER_LINKED_EVENT_NAME:
            case EQUIVALENT_LINKED_EVENT_NAME:
            case THEREFORE_LINKED_EVENT_NAME:
                var edge = EventEdgeMapper.map(<EdgeLinked>event);
                self.graph = self.graph.addEdge(edge);
                return;
            default:
                return;
        }
    }
}
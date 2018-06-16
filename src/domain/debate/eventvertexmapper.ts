import { VertexCreated } from "./events/vertexCreated";
import { AXIOM_CREATED_EVENT_NAME, AxiomCreated } from "./events/axiomcreated";
import { Axiom } from "../../model/vertices/axiom";
import { Guid } from "../../model/objects/guid";
import { CONCLUSION_CREATED_EVENT_NAME, ConclusionCreated } from "./events/conclusioncreated";
import { Conclusion } from "../../model/vertices/conclusion";
import { DEFINITION_CREATED_EVENT_NAME, DefinitionCreated } from "./events/definitioncreated";
import { Definition } from "../../model/vertices/definition";
import { FACT_CREATED_EVENT_NAME, FactCreated } from "./events/factcreated";
import { Fact } from "../../model/vertices/fact";
import { HYPOTHESIS_CREATED_EVENT_NAME, HypothesisCreated } from "./events/hypothesiscreated";
import { Hypothesis } from "../../model/vertices/hypothesis";
import { OPINION_CREATED_EVENT_NAME, OpinionCreated } from "./events/opinioncreated";
import { Opinion } from "../../model/vertices/opinion";
import { QUESTION_CREATED_EVENT_NAME, QuestionCreated } from "./events/questioncreated";
import { Question } from "../../model/vertices/question";
import { THEOREM_CREATED_EVENT_NAME, TheoremCreated } from "./events/theoremcreated";
import { Theorem } from "../../model/vertices/theorem";

export class EventVertexMapper{
    static map(event: VertexCreated){
        switch(event.name){
            case AXIOM_CREATED_EVENT_NAME:
                var axiomCreated = <AxiomCreated>event;
                var axiom = new Axiom();
                axiom.id = axiomCreated.id;
                axiom.text = axiomCreated.text;
                axiom.userId = new Guid(axiomCreated.createdBy);
                return axiom;
            case CONCLUSION_CREATED_EVENT_NAME:
                var conclusionCreated = <ConclusionCreated>event;
                var conclusion = new Conclusion();
                conclusion.id = conclusionCreated.id;
                conclusion.text = conclusionCreated.text;
                conclusion.userId = new Guid(conclusionCreated.createdBy);
                return conclusion;
            case DEFINITION_CREATED_EVENT_NAME:
                var definitionCreated = <DefinitionCreated>event;
                var definition = new Definition();
                definition.id = definitionCreated.id;
                definition.text = definitionCreated.text;
                definition.userId = new Guid(definitionCreated.createdBy);
                return definition;
            case FACT_CREATED_EVENT_NAME:
                var factCreated = <FactCreated>event;
                var fact = new Fact();
                fact.id = factCreated.id;
                fact.text = factCreated.text;
                fact.evidence = factCreated.evidence;
                fact.userId = new Guid(factCreated.createdBy);
                return fact;
            case HYPOTHESIS_CREATED_EVENT_NAME:
                var hypothesisCreated = <HypothesisCreated>event;
                var hypothesis = new Hypothesis();
                hypothesis.id = hypothesisCreated.id;
                hypothesis.text = hypothesisCreated.text;
                hypothesis.userId = new Guid(hypothesisCreated.createdBy);
                return hypothesis;
            case OPINION_CREATED_EVENT_NAME:
                var opinionCreated = <OpinionCreated>event;
                var opinion = new Opinion();
                opinion.id = opinionCreated.id;
                opinion.text = opinionCreated.text;
                opinion.userId = new Guid(opinionCreated.createdBy);
                return opinion;
            case QUESTION_CREATED_EVENT_NAME:
                var questionCreated = <QuestionCreated>event;
                var question = new Question();
                question.id = questionCreated.id;
                question.text = questionCreated.text;
                question.userId = new Guid(questionCreated.createdBy);
                return question;
            case THEOREM_CREATED_EVENT_NAME:
                var theoremCreated = <TheoremCreated>event;
                var theorem = new Theorem();
                theorem.id = theoremCreated.id;
                theorem.text = theoremCreated.text;
                theorem.userId = new Guid(theoremCreated.createdBy);
                return theorem;
            default:
                return null;
        }
    }
}
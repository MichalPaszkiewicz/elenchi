import { Vertex } from "../vertices/vertex";
import { AXIOM_VERTEX_NAME, Axiom } from "../vertices/axiom";
import {CONCLUSION_VERTEX_NAME, Conclusion} from "../vertices/conclusion";
import {DEFINITION_VERTEX_NAME, Definition} from "../vertices/definition";
import {FACT_VERTEX_NAME, Fact} from "../vertices/fact";
import {HYPOTHESIS_VERTEX_NAME, Hypothesis} from "../vertices/hypothesis";
import {OPINION_VERTEX_NAME, Opinion} from "../vertices/opinion";
import {QUESTION_VERTEX_NAME, Question} from "../vertices/question";
import {THEOREM_VERTEX_NAME, Theorem} from "../vertices/theorem";

export type VertexType = typeof Axiom 
| typeof Conclusion
| typeof Definition
| typeof Fact
| typeof Hypothesis
| typeof Opinion
| typeof Question
| typeof Theorem;

export class VertexTypeMapper{
    static map(type: string): VertexType{
        switch(type){
            case AXIOM_VERTEX_NAME:
                return Axiom;
            case CONCLUSION_VERTEX_NAME:
                return Conclusion;
            case DEFINITION_VERTEX_NAME:
                return Definition;
            case FACT_VERTEX_NAME:
                return Fact;
            case HYPOTHESIS_VERTEX_NAME:
                return Hypothesis;
            case OPINION_VERTEX_NAME:
                return Opinion;
            case QUESTION_VERTEX_NAME: 
                return Question;
            case THEOREM_VERTEX_NAME:
                return Theorem;
        }
    }
}
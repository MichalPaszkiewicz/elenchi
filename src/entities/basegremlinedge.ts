export class BaseGremlinEdge{
    id: string;
    label: string;
    type = "edge";
    inVLabel: string;
    outVLabel: string;
    inV: string;
    outV: string;
}
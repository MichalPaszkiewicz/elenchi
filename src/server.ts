import {ApplicationService} from "cqrs-with-es";
import { EdgeCommandHandler } from "./domain/debate/edgecommandhandler";
import { VertexCommandHandler } from "./domain/debate/vertexcommandhandler";
import { DebateView } from "./domain/debate/debateview";

ApplicationService.Instance.registerCommandHandler(EdgeCommandHandler);
ApplicationService.Instance.registerCommandHandler(VertexCommandHandler);

ApplicationService.Instance.registerView(DebateView);
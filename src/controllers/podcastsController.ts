import { IncomingMessage, request, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service.ts"
import { serviceFilterEpisodes } from "../services/filter-episodies-service.ts";
import { StatusCode } from "../utils/status-code.ts";
import { ContentType } from "../utils/content-type.ts";
import type { PodcastTransferModel } from "../models/podcast-transfer-model.ts";

export const getListEpisodes = async (
    request: IncomingMessage, 
    response: ServerResponse
) =>{

    const content:PodcastTransferModel= await serviceListEpisodes();

    response.writeHead(content.statusCode,{'content-type': ContentType.JSON});
    response.write(JSON.stringify( content.body ));
    response.end();
};

export const getFilterEpisodes = async (
    request: IncomingMessage, 
    response: ServerResponse
) => {

    const content:PodcastTransferModel= await serviceFilterEpisodes(request.url);

    response.writeHead(content.statusCode,{'content-type': ContentType.JSON});
    response.write(JSON.stringify( content.body ));
    response.end();
};
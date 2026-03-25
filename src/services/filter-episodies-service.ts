import { IncomingMessage } from "http";
import { repositoryPosdact } from "../repositories/podcast-repository.ts";
import { StatusCode } from "../utils/status-code.ts";
import type { PodcastTransferModel } from "../models/podcast-transfer-model.ts";

export const serviceFilterEpisodes = async (podcastName: string | undefined ): Promise<PodcastTransferModel> => {

    // define a interface de retorno
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    };

    // busca os dados
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await  repositoryPosdact(queryString);

    // verifica o conteudo não está vazio e reporta o statusCode correto
    if (data.length !== 0 ){
        responseFormat.statusCode = StatusCode.OK;
    }else {
        responseFormat.statusCode = StatusCode.NO_CONTENT;
    }

    responseFormat.body = data;

    return responseFormat;
};
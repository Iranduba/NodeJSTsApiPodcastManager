import type { PodcastTransferModel } from "../models/podcast-transfer-model.ts";
import { repositoryPosdact } from "../repositories/podcast-repository.ts";
import { StatusCode } from "../utils/status-code.ts";


export const serviceListEpisodes = async ():Promise<PodcastTransferModel> => {

    // define a interface de retorno
        let responseFormat: PodcastTransferModel = {
            statusCode: 0,
            body: [],
        };
    
    // busca os dados
    const data = await  repositoryPosdact();

      // verifica o conteudo não está vazio e reporta o statusCode correto
        if (data.length !== 0 ){
            responseFormat.statusCode = StatusCode.OK;
        }else {
            responseFormat.statusCode = StatusCode.NO_CONTENT;
        }
    
        responseFormat.body = data;
    
        return responseFormat;

};
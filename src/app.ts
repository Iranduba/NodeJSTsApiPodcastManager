import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from "./controllers/podcastsController.ts";
import { Routes } from "./routes/routes.ts";
import { HttpMethod } from "./utils/http-methods.ts";


export const app = async (request: http.IncomingMessage, reponse: http.ServerResponse)=> {

        // Querie string
        // http://localhost:3636/api/episode?p=Venus
        const baseUrl = request.url?.split("?")[0];
        // console.log(baseUrl);
        // console.log(queryString);

        // Listar podcasts
        if (request.method === HttpMethod.GET && baseUrl === Routes.LIST){
            await getListEpisodes(request, reponse);
        }

         // Filtrar podcasts
        if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE){
            await getFilterEpisodes(request, reponse);
        }

    }

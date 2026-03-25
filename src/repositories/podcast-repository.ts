import fs from "fs";
import path from "path";
import { fileURLToPath } from "node:url";

import type { PodcastModel } from "../models/podcast-model.ts";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathData = path.join(__dirname, "../repositories/podcast.json");

export const repositoryPosdact = async ( podcastName?: string ): Promise<PodcastModel[]> => {
    const rawData = fs.readFileSync(pathData, "utf-8");
    let jsonFile = JSON.parse(rawData);

   if (podcastName){
       jsonFile = jsonFile.filter(
           (podcast: PodcastModel) => podcast.podcastName === podcastName
       );
    };

    return jsonFile;
}
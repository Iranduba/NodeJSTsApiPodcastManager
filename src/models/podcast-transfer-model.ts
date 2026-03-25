import type { PodcastModel } from "./podcast-model";

export interface PodcastTransferModel{
    statusCode: number;
    body: PodcastModel[];
}
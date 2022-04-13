import { Event } from "./event.model";

export interface Image {
    id?: number,
    event: Event,
    path: string,
    name: string,
    extension: string,
    alt: string,
    title: string,
    created_at?: Date | null | undefined;
    updated_at?: Date | null | undefined;
}
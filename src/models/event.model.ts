import { Image } from "./image.model";

export interface Event {
    id?: number;
    name: string;
    image?: Image | null | undefined;
    description?: string | null | undefined;
    start_date: Date;
    end_date?: Date | null | undefined;
    location: string;
    year: number;
}
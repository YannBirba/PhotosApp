export interface Event {
    id: number;
    name: string;
    image_id: number;
    description?: string;
    start_date?: Date;
    end_date?: Date;
    location?: string;
    year: number;
}
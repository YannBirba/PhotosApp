export interface Event {
    id?: number;
    name: string;
    image_id?: number | null | undefined;
    description?: string | null | undefined;
    start_date: Date;
    end_date?: Date | null | undefined;
    location?: string | null | undefined;
    year: number;
}
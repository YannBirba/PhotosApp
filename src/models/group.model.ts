import { Event } from "./event.model";
import { User } from "./user.model";

export interface Group {
    id?: number;
    name: string;
    created_at?: Date | null | undefined;
    updated_at?: Date | null | undefined;
    events?: Event[];
    users?: User[];
}

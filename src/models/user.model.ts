import { Group } from "./group.model";

export interface User {
  id?: number;
  group: Group;
  name: string;
  email: string;
  is_admin: boolean;
  created_at?: Date | null | undefined;
  updated_at?: Date | null | undefined;
}

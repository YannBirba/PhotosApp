import { Group } from 'src/models/group.model';
import { Image } from 'src/models/image.model';
import { User } from 'src/models/user.model';
import { Event } from '../../models/event.model';

export interface AppState {
  events: ReadonlyArray<Event>;
  groups: ReadonlyArray<Group>;
  images: ReadonlyArray<Image>;
  users: ReadonlyArray<User>;
  currentUser : User;
}

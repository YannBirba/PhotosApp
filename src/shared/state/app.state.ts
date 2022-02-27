import { Event } from '../../models/event.model';

export interface AppState {
  events: ReadonlyArray<Event>;
}
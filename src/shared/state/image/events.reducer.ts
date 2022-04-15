import { createReducer, on } from '@ngrx/store';
import { eventUpdateResponse, eventGetAllResponse, eventGetResponse, eventCreateResponse, eventDeleteResponse } from './events.actions';
import { Event } from '../../src/models/event.model';

export const initialState: ReadonlyArray<Event> = Array<Event>();

export const eventsReducer = createReducer(
  initialState,
  on(eventGetAllResponse, (state, { events }) => events),
  on(eventGetResponse, (state, { eventId }) => state.filter(event => event.id !== eventId)),
  on(eventCreateResponse, (state, { event }) => [...state, event]),
  on(eventUpdateResponse, (state, { event }) => state.map(e => e.id === event.id ? event : e)),
  on(eventDeleteResponse, (state, { eventId }) => state.filter(event => event.id !== eventId))
);

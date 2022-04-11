import { createAction, props } from '@ngrx/store';
import { Event } from '../../../models/event.model';

export const eventGetAll = createAction('[Event] {APP} Get all (request)',
props<{ clear: boolean }>());

export const eventGetAllResponse = createAction(
  '[Event] {API} Get all (response)',
  props<{ events: ReadonlyArray<Event> }>()
);
export const eventGetAllError = createAction('[Event] {API} Get all (error)');

export const eventGet = createAction(
  '[Event] {APP} Get (request)',
  props<{ eventId: number }>()
);
export const eventGetResponse = createAction(
  '[Event] {API} Get (response)',
  props<{ eventId: number }>()
);
export const eventGetError = createAction('[Event] {API} all (error)');

export const eventCreate = createAction(
  '[Event] {APP} Create (request)',
  props<{ event: Event }>()
);
export const eventCreateResponse = createAction(
  '[Event] {API} Create (response)',
  props<{ event: Event }>()
);
export const eventCreateError = createAction('[Event] {API} Create (error)');

export const eventUpdate = createAction(
  '[Event] {APP} Update (request)',
  props<{ event: Event }>()
);
export const eventUpdateResponse = createAction(
  '[Event] {API} Update (response)',
  props<{ event: Event }>()
);
export const eventUpdateError = createAction('[Event] {API} Update (error)');

export const eventDelete = createAction(
  '[Event] {APP} Delete (request)',
  props<{ eventId: number }>()
);
export const eventDeleteResponse = createAction(
  '[Event] {API} Delete (response)',
  props<{ eventId: number }>()
);
export const eventDeleteError = createAction('[Event] {API} Delete (error)');

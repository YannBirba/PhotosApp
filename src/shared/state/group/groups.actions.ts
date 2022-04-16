import { createAction, props } from '@ngrx/store';
import { Group } from '../../../models/group.model';

export const groupGetAll = createAction('[Group] {APP} Get all (request)',
props<{ clear: boolean }>());

export const groupGetAllResponse = createAction(
  '[Group] {API} Get all (response)',
  props<{ groups: ReadonlyArray<Group> }>()
);
export const groupGetAllError = createAction('[Group] {API} Get all (error)');

export const groupGet = createAction(
  '[Group] {APP} Get (request)',
  props<{ groupId: number }>()
);
export const groupGetResponse = createAction(
  '[Group] {API} Get (response)',
  props<{ groupId: number }>()
);
export const groupGetError = createAction('[Group] {API} all (error)');

export const groupCreate = createAction(
  '[Group] {APP} Create (request)',
  props<{ group: Group }>()
);
export const groupCreateResponse = createAction(
  '[Group] {API} Create (response)',
  props<{ group: Group }>()
);
export const groupCreateError = createAction('[Group] {API} Create (error)');

export const groupUpdate = createAction(
  '[Group] {APP} Update (request)',
  props<{ group: Group }>()
);
export const groupUpdateResponse = createAction(
  '[Group] {API} Update (response)',
  props<{ group: Group }>()
);
export const groupUpdateError = createAction('[Group] {API} Update (error)');

export const groupDelete = createAction(
  '[Group] {APP} Delete (request)',
  props<{ groupId: number }>()
);
export const groupDeleteResponse = createAction(
  '[Group] {API} Delete (response)',
  props<{ groupId: number }>()
);
export const groupDeleteError = createAction('[Group] {API} Delete (error)');

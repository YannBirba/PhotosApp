import { createAction, props } from '@ngrx/store';
import { User } from '../../../models/user.model';

export const userGetAll = createAction('[User] {APP} Get all (request)',
props<{ clear: boolean }>());

export const userGetAllResponse = createAction(
  '[User] {API} Get all (response)',
  props<{ users: ReadonlyArray<User> }>()
);
export const userGetAllError = createAction('[User] {API} Get all (error)');

export const userGet = createAction(
  '[User] {APP} Get (request)',
  props<{ userId: number }>()
);
export const userGetResponse = createAction(
  '[User] {API} Get (response)',
  props<{ userId: number }>()
);
export const userGetError = createAction('[User] {API} all (error)');

export const userCreate = createAction(
  '[User] {APP} Create (request)',
  props<{ user: User }>()
);
export const userCreateResponse = createAction(
  '[User] {API} Create (response)',
  props<{ user: User }>()
);
export const userCreateError = createAction('[User] {API} Create (error)');

export const userUpdate = createAction(
  '[User] {APP} Update (request)',
  props<{ user: User }>()
);
export const userUpdateResponse = createAction(
  '[User] {API} Update (response)',
  props<{ user: User }>()
);
export const userUpdateError = createAction('[User] {API} Update (error)');

export const userDelete = createAction(
  '[User] {APP} Delete (request)',
  props<{ userId: number }>()
);
export const userDeleteResponse = createAction(
  '[User] {API} Delete (response)',
  props<{ userId: number }>()
);
export const userDeleteError = createAction('[User] {API} Delete (error)');

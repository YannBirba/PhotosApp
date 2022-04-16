import { createReducer, on } from '@ngrx/store';
import { userUpdateResponse, userGetAllResponse, userGetResponse, userCreateResponse, userDeleteResponse } from './users.actions';
import { User } from '../../../models/user.model';

export const initialState: ReadonlyArray<User> = Array<User>();

export const usersReducer = createReducer(
  initialState,
  on(userGetAllResponse, (state, { users }) => users),
  on(userGetResponse, (state, { userId }) => state.filter(user => user.id !== userId)),
  on(userCreateResponse, (state, { user }) => [...state, user]),
  on(userUpdateResponse, (state, { user }) => state.map(e => e.id === user.id ? user : e)),
  on(userDeleteResponse, (state, { userId }) => state.filter(user => user.id !== userId))
);

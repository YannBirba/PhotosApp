import { createReducer, on } from '@ngrx/store';
import {
  groupUpdateResponse,
  groupGetAllResponse,
  groupGetResponse,
  groupCreateResponse,
  groupDeleteResponse,
} from './groups.actions';
import { Group } from '../../../models/group.model';

export const initialState: ReadonlyArray<Group> = Array<Group>();

export const groupsReducer = createReducer(
  initialState,
  on(groupGetAllResponse, (state, { groups }) => groups),
  on(groupGetResponse, (state, { groupId }) =>
    state.filter((group) => group.id !== groupId)
  ),
  on(groupCreateResponse, (state, { group }) => [...state, group]),
  on(groupUpdateResponse, (state, { group }) =>
    state.map((e) => (e.id === group.id ? group : e))
  ),
  on(groupDeleteResponse, (state, { groupId }) =>
    state.filter((group) => group.id !== groupId)
  )
);

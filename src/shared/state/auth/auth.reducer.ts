import { createReducer, on } from '@ngrx/store';
import { User } from 'src/models/user.model';
import {
  currentUserResponse,
  currentUserUpdateResponse,
  loginResponse,
  logoutResponse,
} from './auth.actions';

export const initialState: User = {
  email: '',
  group: { name: '' },
  is_admin: false,
  name: '',
};

export const authReducer = createReducer(
  initialState,
  on(currentUserResponse, (state, { currentUser }) => {
    return { ...state, ...currentUser };
  }),
  on(currentUserUpdateResponse, (state, { currentUser }) => {
    return { ...state, ...currentUser };
  }),
  on(logoutResponse, () => {
    return initialState;
  }),
  on(loginResponse, (state, { login }) => {
    return { ...state, ...login };
  })
);

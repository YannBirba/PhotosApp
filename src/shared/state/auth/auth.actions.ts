import { createAction, props } from '@ngrx/store';
import { Login, Register } from 'src/models/auth.model';
import { User } from 'src/models/user.model';

export const login = createAction(
  '[Auth] {APP} Login (request)',
  props<{ login: Login }>()
);
export const loginResponse = createAction(
  '[Auth] {API} Login (response)',
  props<{ login: Login }>()
);
export const loginError = createAction('[Auth] {API} Login (error)');

export const register = createAction(
  '[Auth] {APP} Register (request)',
  props<{ register: Register }>()
);
export const registerResponse = createAction(
  '[Auth] {API} Register (response)',
  props<{ register: Register }>()
);
export const registerError = createAction('[Auth] {API} Register (error)');

export const logout = createAction(
  '[Auth] {APP} Logout (request)'
);
export const logoutResponse = createAction(
  '[Auth] {API} Logout (response)'
);
export const logoutError = createAction('[Auth] {API} Logout (error)');

export const currentUser = createAction('[Auth] {APP} currentUser (request)');

export const currentUserResponse = createAction(
  '[Auth] {API} currentUser (response)',
  props<{ currentUser: User }>()
);
export const currentUserError = createAction('[Auth] {API} currentUser (error)');

export const currentUserUpdate = createAction('[Auth] {APP} currentUserUpdate (request)',
  props<{ currentUser: User }>());

export const currentUserUpdateResponse = createAction(
  '[Auth] {API} currentUserUpdate (response)',
  props<{ currentUser: User }>()
);
export const currentUserUpdateError = createAction('[Auth] {API} currentUserUpdate (error)');

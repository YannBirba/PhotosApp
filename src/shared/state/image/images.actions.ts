import { createAction, props } from '@ngrx/store';
import { Image } from '../../../models/image.model';

export const imageGetAll = createAction('[Image] {APP} Get all (request)',
props<{ clear: boolean }>());

export const imageGetAllResponse = createAction(
  '[Image] {API} Get all (response)',
  props<{ images: ReadonlyArray<Image> }>()
);
export const imageGetAllError = createAction('[Image] {API} Get all (error)');

export const imageGet = createAction(
  '[Image] {APP} Get (request)',
  props<{ imageId: number }>()
);
export const imageGetResponse = createAction(
  '[Image] {API} Get (response)',
  props<{ imageId: number }>()
);
export const imageGetError = createAction('[Image] {API} all (error)');

export const imageCreate = createAction(
  '[Image] {APP} Create (request)',
  props<{ image: Image }>()
);
export const imageCreateResponse = createAction(
  '[Image] {API} Create (response)',
  props<{ image: Image }>()
);
export const imageCreateError = createAction('[Image] {API} Create (error)');

export const imageUpdate = createAction(
  '[Image] {APP} Update (request)',
  props<{ image: Image }>()
);
export const imageUpdateResponse = createAction(
  '[Image] {API} Update (response)',
  props<{ image: Image }>()
);
export const imageUpdateError = createAction('[Image] {API} Update (error)');

export const imageDelete = createAction(
  '[Image] {APP} Delete (request)',
  props<{ imageId: number }>()
);
export const imageDeleteResponse = createAction(
  '[Image] {API} Delete (response)',
  props<{ imageId: number }>()
);
export const imageDeleteError = createAction('[Image] {API} Delete (error)');

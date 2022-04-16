import { createReducer, on } from '@ngrx/store';
import { imageUpdateResponse, imageGetAllResponse, imageGetResponse, imageCreateResponse, imageDeleteResponse } from './images.actions';
import { Image } from '../../../models/image.model';

export const initialState: ReadonlyArray<Image> = Array<Image>();

export const imagesReducer = createReducer(
  initialState,
  on(imageGetAllResponse, (state, { images }) => images),
  on(imageGetResponse, (state, { imageId }) => state.filter(image => image.id !== imageId)),
  on(imageCreateResponse, (state, { image }) => [...state, image]),
  on(imageUpdateResponse, (state, { image }) => state.map(e => e.id === image.id ? image : e)),
  on(imageDeleteResponse, (state, { imageId }) => state.filter(image => image.id !== imageId))
);

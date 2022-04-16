import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, finalize } from 'rxjs/operators';
import { ImageService } from '../../services/image/image.service';
import {
  imageDelete,
  imageGetAll,
  imageGetAllError,
  imageGetAllResponse,
  imageDeleteError,
  imageDeleteResponse,
  imageGet,
  imageGetResponse,
  imageGetError,
  imageUpdate,
  imageUpdateResponse,
  imageUpdateError,
  imageCreate,
  imageCreateResponse,
  imageCreateError,
} from './images.actions';

@Injectable()
export class ImageEffects {
  constructor(private actions$: Actions, private imageService: ImageService) {}

  imageGetAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(imageGetAll.type),
      mergeMap(({ clear }) =>
        this.imageService.getAll(clear).pipe(
          map((images) => imageGetAllResponse({ images })),
          catchError((error) => {
            console.error(error);
            return of(imageGetAllError());
          }),
          finalize(() => {
            console.info('imageGetAll$ effect complete');
          })
        )
      )
    )
  );

  imageGet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(imageGet.type),
      mergeMap(({ imageId }) =>
        this.imageService.get(imageId).pipe(
          map(() => imageGetResponse({ imageId })),
          catchError((error) => {
            console.error(error);
            return of(imageGetError());
          }),
          finalize(() => {
            console.info('imageGet$ effect complete');
          })
        )
      )
    )
  );

  imageDelete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(imageDelete.type),
      mergeMap(({ imageId }) =>
        this.imageService.delete(imageId).pipe(
          map(() => imageDeleteResponse({ imageId })),
          catchError((error) => {
            console.error(error);
            return of(imageDeleteError());
          }),
          finalize(() => {
            console.info('imageDelete$ effect complete');
          })
        )
      )
    )
  );

  imageUpdate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(imageUpdate.type),
      mergeMap(({ image }) =>
        this.imageService.update(image).pipe(
          map(() => imageUpdateResponse({ image })),
          catchError((error) => {
            console.error(error);
            return of(imageUpdateError());
          }),
          finalize(() => {
            console.info('imageUpdate$ effect complete');
          })
        )
      )
    )
  );

  imageCreate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(imageCreate.type),
      mergeMap(({ image }) =>
        this.imageService.create(image).pipe(
          map(() => imageCreateResponse({ image })),
          catchError((error) => {
            console.error(error);
            return of(imageCreateError());
          }),
          finalize(() => {
            console.info('imageCreate$ effect complete');
          })
        )
      )
    )
  );
}

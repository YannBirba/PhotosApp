import { createFeatureSelector } from '@ngrx/store';
import { Image } from '../../../models/image.model';

export const selectImages = createFeatureSelector<ReadonlyArray<Image>>('images');

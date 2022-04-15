import { createFeatureSelector } from '@ngrx/store';
import { Event } from '../../../models/event.model';

export const selectEvents = createFeatureSelector<ReadonlyArray<Event>>('events');

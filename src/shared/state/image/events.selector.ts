import { createFeatureSelector } from '@ngrx/store';
import { Event } from '../../src/models/event.model';

export const selectEvents = createFeatureSelector<ReadonlyArray<Event>>('events');

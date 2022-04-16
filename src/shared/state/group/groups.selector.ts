import { createFeatureSelector } from '@ngrx/store';
import { Group } from '../../../models/group.model';

export const selectGroups = createFeatureSelector<ReadonlyArray<Group>>('group');

import { createFeatureSelector } from '@ngrx/store';
import { User } from '../../../models/user.model';

export const selectUsers = createFeatureSelector<ReadonlyArray<User>>('users');

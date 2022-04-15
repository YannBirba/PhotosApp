import { createFeatureSelector } from '@ngrx/store';
import { User } from 'src/models/user.model';
export const selectCurrentUser = createFeatureSelector<User>('currentUser');

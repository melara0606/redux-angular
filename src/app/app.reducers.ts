import { ActionReducerMap } from '@ngrx/store';

// State
import { State } from './shared/ui.actions';
import { AuthState } from './auth/auth.actions';

// Reducers
import { uiReducers } from './shared/ui.reducers';
import { authReducers } from './auth/auth.reducers';

export interface AppState {
  ui: State;
  auth: AuthState;
}

export const appReducers: ActionReducerMap<AppState> = {
  ui: uiReducers,
  auth: authReducers
};

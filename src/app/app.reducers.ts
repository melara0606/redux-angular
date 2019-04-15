import { ActionReducerMap } from '@ngrx/store';

// State
import { State } from './shared/ui.actions';
import { AuthState } from './auth/auth.actions';

// Reducers
import { uiReducers } from './shared/ui.reducers';
import { authReducers } from './auth/auth.reducers';
import { IngresoEgresoReducer, IngresoEgresoState } from './ingreso-egreso/ingreso-egreso.reducers';

export interface AppState {
  ui: State;
  auth: AuthState;
  ingresoEgreso: IngresoEgresoState;
}

export const appReducers: ActionReducerMap<AppState> = {
  ui: uiReducers,
  auth: authReducers,
  ingresoEgreso: IngresoEgresoReducer
};

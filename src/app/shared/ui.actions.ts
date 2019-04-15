import { Action } from '@ngrx/store';

export interface State {
  loading: boolean;
}

export const initialState: State = {
  loading: true
};

export enum UIActionsTypes {
  ActivarLoadingAction = '[ui] activar loading',
  DesactivarLoadingAction = '[ui] desactivar loading'
}

export class ActivarActions implements Action {
  readonly type = UIActionsTypes.ActivarLoadingAction;
}

export class DesactivarActions implements Action {
  readonly type = UIActionsTypes.DesactivarLoadingAction;
}

export type UIActionsUnion = ActivarActions | DesactivarActions;

import { Action } from '@ngrx/store';
import { IngresoEgreso } from '../models/IngresoEgreso';

export enum IngresoEgresoTypesActions {
  SetItemsAction = '[IngresoEgreso] Set item',
  UnSetItemsAction = '[IngresoEgreso] UnSet item'
}

export class SetItemsActions implements Action {
  [x: string]: any;
  readonly type = IngresoEgresoTypesActions.SetItemsAction;
  action: any;
  constructor(public items: IngresoEgreso[]) { }
}

export class UnSetItemsActions implements Action {
  readonly type = IngresoEgresoTypesActions.UnSetItemsAction;
}

export type IngresoEgresoActionsUnion = SetItemsActions | UnSetItemsActions;

import * as IngresoEgresoActions from './ingreso-egreso.actions';
import { IngresoEgreso } from '../models/IngresoEgreso';

export interface IngresoEgresoState {
  items: IngresoEgreso[];
}

export const initialState: IngresoEgresoState = {
  items: []
};

export function IngresoEgresoReducer(state = initialState, action: IngresoEgresoActions.IngresoEgresoActionsUnion): IngresoEgresoState {
  switch (action.type) {
    case IngresoEgresoActions.IngresoEgresoTypesActions.SetItemsAction: {
      return {
        items: [
          ...action.items.map((item) => ({ ...item }))
        ]
      };
    }

    case IngresoEgresoActions.IngresoEgresoTypesActions.UnSetItemsAction: {
      return {
        items: []
      };
    }

    default: return state;
  }
}

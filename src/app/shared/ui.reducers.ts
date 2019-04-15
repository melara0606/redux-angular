import * as UIActions from './ui.actions';

export function uiReducers(state = UIActions.initialState, action: UIActions.UIActionsUnion): UIActions.State {
  switch (action.type) {
    case UIActions.UIActionsTypes.ActivarLoadingAction: {
      return {
        loading: true
      };
    }

    case UIActions.UIActionsTypes.DesactivarLoadingAction: {
      return {
        loading: false
      };
    }

    default:
      return state;
  }
}

import * as AuthActionsTypes from './auth.actions';

export function authReducers(state = AuthActionsTypes.initialState, action: AuthActionsTypes.AuthUnionTypes): AuthActionsTypes.AuthState {
  switch (action.type) {
    case AuthActionsTypes.AuthActionsTypes.SetAuth: {
      return {
        user: { ...action.user }
      };
    }

    default:
      return state;
  }
}

import { Action } from '@ngrx/store';
import { Usuario } from '../models/Usuario';

export interface AuthState {
  user: Usuario;
}

export const initialState: AuthState = {
  user: null
};

export enum AuthActionsTypes {
  SetAuth = '[Auth] set auth',
}

export class SetAuthActions implements Action {
  readonly type = AuthActionsTypes.SetAuth;
  constructor(public user: Usuario) {}
}

export type AuthUnionTypes = SetAuthActions;

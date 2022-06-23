import { AuthState } from "./";

type AuthActionType =
  | { type: "[AUTH] - Login"; payload: string }
  | { type: "[AUTH] - Logout" }
  | { type: "[AUTH] - Add error"; payload: string }
  | { type: "[AUTH] - Remove error" };

export const authReducer = (
  state: AuthState,
  action: AuthActionType
): AuthState => {
  switch (action.type) {
    case "[AUTH] - Login":
      return {
        ...state,
        isLogged: true,
        token: action.payload,
      };

    case "[AUTH] - Logout":
      return {
        ...state,
        isLogged: false,
        token: null,
      };

    case "[AUTH] - Add error":
      return {
        ...state,
        errorMessage: action.payload,
      };

    case "[AUTH] - Remove error":
      return {
        ...state,
        errorMessage: null,
      };

    default:
      return state;
  }
};

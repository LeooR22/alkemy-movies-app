import { FC, useReducer } from "react";
import alkemyApi from "../../api/alkemyApi";
import { AlkemyLoginResponse } from "../../interfaces/interfaces";
import { AuthContext, authReducer } from "./";

export interface AuthState {
  isLogged: boolean;
  token: string | null;
  errorMessage: string | null;
}

const AUTH_INITIAL_STATE: AuthState = {
  isLogged: false,
  token: null,
  errorMessage: null,
};

type Props = {
  children?: React.ReactNode;
};

export const AuthProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

  const loginUser = async (email: string, password: string) => {
    try {
      const { data } = await alkemyApi.post<AlkemyLoginResponse>("", {
        email,
        password,
      });

      const token = data.token;

      localStorage.setItem("token", token);
      console.log(token);

      dispatch({
        type: "[AUTH] - Login",
        payload: token,
      });
    } catch (error: any) {
      const errorMessage = error.response.data.error;
      dispatch({
        type: "[AUTH] - Add error",
        payload: errorMessage || "Check your credentials",
      });
    }
  };

  const logOut = () => {
    localStorage.removeItem("token");
    dispatch({
      type: "[AUTH] - Logout",
    });
  };

  const addError = (errorMessage: string) => {
    dispatch({
      type: "[AUTH] - Add error",
      payload: errorMessage,
    });
  };

  const clearError = () => {
    dispatch({
      type: "[AUTH] - Remove error",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        loginUser,
        logOut,
        clearError,
        addError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

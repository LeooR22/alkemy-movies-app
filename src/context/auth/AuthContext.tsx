import { createContext } from "react";

interface ContextProps {
  isLogged: boolean;
  token: string | null;
  errorMessage: string | null;
  loginUser: (email: string, password: string) => void;
  logOut: () => void;
  addError: (errorMessage: string) => void;
  clearError: () => void;
}

export const AuthContext = createContext({} as ContextProps);

import { FC, ReactNode } from "react";
import { AuthProvider } from "./context/auth";
import AppRouter from "./routers/AppRouter";

interface Props {
  children: ReactNode;
}

const AppState: FC<Props> = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export const App = () => {
  return (
    <>
      <AppState>
        <AppRouter />
      </AppState>
    </>
  );
};

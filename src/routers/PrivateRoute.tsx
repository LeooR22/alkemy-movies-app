import React, { FC, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
// import AuthContext from "../auth/authContext";
import { AuthContext } from "../context/auth";

interface Props {
  children: any;
}

const PrivateRoute: FC<Props> = ({ children }: any) => {
  const { isLogged } = useContext(AuthContext);
  const { pathname, search } = useLocation();

  localStorage.setItem("lastPath", pathname + search);

  return isLogged ? children : <Navigate to="/auth/login" />;
};
export default PrivateRoute;

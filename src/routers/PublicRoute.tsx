import React, { FC, ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth";

interface Props {
  children: any;
}

const PublicRoute: FC<Props> = ({ children }) => {
  const { isLogged } = useContext(AuthContext);

  return !isLogged ? children : <Navigate to="/home" />;
};

export default PublicRoute;

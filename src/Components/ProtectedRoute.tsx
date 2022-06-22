import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

interface Props extends RouteProps {
  isAuth: boolean;
}

const ProtectedRoutes = ({ isAuth, ...routesProps }: Props) => {
  if (isAuth) {
    return <Route {...routesProps} />;
  }
  return <Redirect to="/login" />;
};

export default ProtectedRoutes;

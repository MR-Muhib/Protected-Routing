import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default Protected;

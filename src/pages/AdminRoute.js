import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ loguser, path = "/userWelcome", children }) => {
  if (!loguser.is_admin) {
    return <Navigate to={path} replace />;
  }
  return children;
};

export default AdminRoute;

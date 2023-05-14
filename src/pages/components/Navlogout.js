import React from "react";
import { Link, Navigate } from "react-router-dom";
const Navlogout = ({ onLogout }) => {
  return (
    <button
      className="btn btn-link text-dark text-decoration-none
      "
      onClick={() => {
        onLogout({});
        <Navigate to="/" replace />;
      }}
    >
      Logout
    </button>
  );
};

export default Navlogout;

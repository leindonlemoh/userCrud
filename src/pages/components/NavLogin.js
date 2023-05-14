import React from "react";
import { Link, Navigate } from "react-router-dom";

const NavLogin = () => {
  return (
    <Link className="btn btn-link text-dark text-decoration-none" to="/">
      Login
    </Link>
  );
};

export default NavLogin;

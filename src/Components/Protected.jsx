import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loadAuth } from "../utils/sessionStorage";

const Protected = ({ children }) => {
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const auth = loadAuth("auth")||isAuth;
  if (!auth) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default Protected;

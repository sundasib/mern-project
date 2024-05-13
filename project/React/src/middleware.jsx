import { Navigate } from "react-router-dom";
import PropTypes from "react";
import { LoginContext } from "./App";
//import { useState } from "react";
import { useContext } from "react";
function ProtectedRoutes({ children }) {
  const [isLogin, setIsLogin] = useContext(LoginContext);
  //const loginCheck = false;
  return <>{!isLogin ? <Navigate to="/" replace /> : children}</>;
}
ProtectedRoutes.propTypes = {
  children: PropTypes.required,
};
export default ProtectedRoutes;

import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { FC } from "react";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const token = Cookies.get("auth-token"); // Retrieve the auth token from cookies

  if (!token) {
    // If no token exists, redirect to login
    return <Navigate to="/login" />;
  }

  // If token exists, render the protected route content
  return children;
};

export default ProtectedRoute;

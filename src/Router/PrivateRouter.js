import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../Context/AuthContext";

const PrivateRouter = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useContext(UserContext);

  if (loading) {
    <progress className="progress progress-success w-full"></progress>;
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRouter;
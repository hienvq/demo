import React from "react";
import { Navigate } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";

const PrivateComponent = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? (
    <AdminLayout>
      <Component {...rest} />
    </AdminLayout>
  ) : (
    <Navigate to="/login" />
  );
};
export default PrivateComponent;

import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, role }) => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  if (!token) {
    return <Navigate to={`/${role}/login`} replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/\" replace />;
  }

  return children;
};

export default PrivateRoute;
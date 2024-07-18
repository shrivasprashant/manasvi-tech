import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Mock function to get user role; replace with actual logic
const getUserRole = () => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  if (token && role === 'admin') {
    return role;
  }
  return 'admin';
};

const ProtectedAdminRoute = () => {
  const role = getUserRole();

  return role === 'admin' ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedAdminRoute;

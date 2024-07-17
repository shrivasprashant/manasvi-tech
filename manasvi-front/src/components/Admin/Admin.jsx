import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Admin = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-10">
        <Header />
        {children}
      </div>
    </div>
  );
};

const Sidebar = () => {
  const [showProductsMenu, setShowProductsMenu] = useState(false);

  const toggleProductsMenu = () => {
    setShowProductsMenu(!showProductsMenu);
  };

  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <div className="p-4 flex items-center justify-between">
        <div>
          <img src="../assets/images/logo.png" alt="Logo" className="w-12 h-12 rounded-full" />
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>
      </div>
      <nav>
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin/CreateTeam">Create Team</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <a href="#" onClick={toggleProductsMenu} className="flex items-center">
              <span className="mr-2">Manage Products</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${showProductsMenu ? 'transform rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            {showProductsMenu && (
              <div className="ml-4 mt-2 bg-gray-700 rounded-md shadow-lg">
                <Link
                  to="/admin/CreateProducts"
                  className="block px-4 py-2 text-white hover:bg-gray-600"
                >
                  Create Product
                </Link>
                <Link
                  to="/admin/ManageProducts"
                  className="block px-4 py-2 text-white hover:bg-gray-600"
                >
                  Manage Products
                </Link>
              </div>
            )}
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin/services">Manage Services</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin/ManageTeam">Team Management</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin/ManageReviews">Review Management</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/CreateReview">Create Review </Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin/ManageContacts">Contact Management</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-6 p-4">
      <h2 className="text-3xl font-bold">Dashboard</h2>
      <button className="p-2 bg-blue-500 text-white rounded">Logout</button>
    </div>
  );
};

export default Admin;

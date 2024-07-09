import React from 'react';
import logo from '../../assets/Images/manasvilogo.png';
import backgroundImage from "../../assets/Images/Footer.jpg";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Login" className="rounded-lg" style={{ width: '300px', height: '60px' }} />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <input className="p-2 border rounded" name='email' type="email" placeholder="Email"  required/>
            <input className="p-2 border rounded" name='password' type="password" placeholder="Password" required />
          </div>
          <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit">
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-blue-500">Forgot Password?</a>
        </div>
        <div className="mt-4 text-center">
          <span className="text-sm">Don't have an account?</span>
          <a href="/register" className="text-blue-500"> Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;

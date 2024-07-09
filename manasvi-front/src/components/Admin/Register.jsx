import React from 'react';
import logo from '../../assets/Images/manasvilogo.png';
import backgroundImage from "../../assets/Images/Footer.jpg";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Register" className="rounded-lg" style={{ width: '300px', height: '60px' }} />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <input className="p-2 border rounded-md" name='name' type="text" placeholder="Name" required/>
            <input className="p-2 border rounded" name='mobileNumber' type="Number" placeholder="mobile number" required maxLength={10} minLength={10} />
            <input className="p-2 border rounded" name='email' type="email" placeholder="Email" required />
            <input className="p-2 border rounded" name='password' type="password" placeholder="Password" required />
          </div>
          <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600" type="submit">
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-sm">Already have an account?</span>
          <a href="/login" className="text-blue-500"> Login</a>
        </div>
      </div>
    </div>
  );
};

export default Register;

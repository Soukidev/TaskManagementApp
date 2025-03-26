import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    try {
      await register(name, email, password);
      navigate("/dashboard");
    } catch (err) {
      console.error(
        "Registration Error:",
        err.response?.data?.message || err.message
      );
      setError(
        err.response?.data?.message || "Registration failed. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side: Registration Form */}
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Create an Account
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Join our platform to manage your tasks efficiently
          </p>
        </div>
        
        {/* Error Alert */}
        {error && (
          <div className="p-4 mb-6 text-sm rounded-lg bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 flex items-center">
            <svg className="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
            </svg>
            {error}
          </div>
        )}
        
        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label 
              htmlFor="name" 
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="John Doe"
                required
              />
            </div>
          </div>
          
          {/* Email Field */}
          <div>
            <label 
              htmlFor="email" 
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
          </div>
          
          {/* Password Field */}
          <div>
            <label 
              htmlFor="password" 
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="••••••••"
                required
              />
            </div>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Must be at least 6 characters long</p>
          </div>
          
          {/* Terms Checkbox */}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-400">
                I agree to the{" "}
                <a className="font-medium text-blue-600 hover:underline dark:text-blue-500" href="#">
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:focus:ring-blue-800 transition-all duration-300 ease-in-out"
          >
            Create Account
          </button>
          
          {/* Sign In Link */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-blue-600 hover:underline dark:text-blue-500 cursor-pointer font-medium"
              >
                Sign in
              </span>
            </p>
          </div>
        </form>
      </div>

      {/* Right Side: Marketing Section */}
      <div className="hidden md:block w-full bg-purple-700 text-white p-8">
        <div className="flex flex-col items-center space-y-4">
          <img
            src="https://your-logo-path.com/logo.png"
            alt="Flowbite Logo"
            className="h-10"
          />
          <h2 className="text-4xl font-bold text-center">
            Explore the world’s leading design portfolios.
          </h2>
          <p className="text-center text-lg">
            Millions of designers use Flowbite to showcase their skills and
            connect with clients.
          </p>
          <div className="flex space-x-4 mt-6">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          </div>
          <p className="mt-4 text-center">Over 15.7k Happy Customers</p>
        </div>
      </div>
    </div>
  );
};

export default Register;




//V2

import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    try {
      await register(name, email, password);
      navigate("/dashboard");
    } catch (err) {
      console.error(
        "Registration Error:",
        err.response?.data?.message || err.message
      );
      setError(
        err.response?.data?.message || "Registration failed. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side: Registration Form */}
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Create an Account
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Join our platform to manage your tasks efficiently
          </p>
        </div>
        
        {/* Error Alert */}
        {error && (
          <div className="p-4 mb-6 text-sm rounded-lg bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 flex items-center">
            <svg className="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
            </svg>
            {error}
          </div>
        )}
        
        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label 
              htmlFor="name" 
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="John Doe"
                required
              />
            </div>
          </div>
          
          {/* Email Field */}
          <div>
            <label 
              htmlFor="email" 
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
          </div>
          
          {/* Password Field */}
          <div>
            <label 
              htmlFor="password" 
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="••••••••"
                required
              />
            </div>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Must be at least 6 characters long</p>
          </div>
          
          {/* Terms Checkbox */}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-400">
                I agree to the{" "}
                <a className="font-medium text-blue-600 hover:underline dark:text-blue-500" href="#">
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:focus:ring-blue-800 transition-all duration-300 ease-in-out"
          >
            Create Account
          </button>
          
          {/* Sign In Link */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-blue-600 hover:underline dark:text-blue-500 cursor-pointer font-medium"
              >
                Sign in
              </span>
            </p>
          </div>
        </form>
      </div>

      {/* Right Side: Marketing Section */}
      <div className="hidden md:block w-full bg-purple-700 text-white p-8">
        <div className="flex flex-col items-center space-y-4">
          <img
            src="https://your-logo-path.com/logo.png"
            alt="Flowbite Logo"
            className="h-10"
          />
          <h2 className="text-4xl font-bold text-center">
            Explore the world’s leading design portfolios.
          </h2>
          <p className="text-center text-lg">
            Millions of designers use Flowbite to showcase their skills and
            connect with clients.
          </p>
          <div className="flex space-x-4 mt-6">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          </div>
          <p className="mt-4 text-center">Over 15.7k Happy Customers</p>
        </div>
      </div>
    </div>
  );
};

export default Register;

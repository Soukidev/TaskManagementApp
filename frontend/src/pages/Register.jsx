import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { register, registerWithGoogle } = useContext(AuthContext);
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
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await registerWithGoogle();
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Google Sign-up failed. Please try again.");
    }
  };

  return (
    <div className="dark:bg-gray-900 h-screen flex flex-col">
      <Navbar />
  
      {/* Main Registration Form */}
      <div className="flex flex-grow items-center justify-center p-6">
        <div className="w-full max-w-6xl flex h-full rounded-lg shadow-xl overflow-hidden">
          {/* Left Section: Register Form */}
          <div className="w-1/2 h-full bg-purple-200 dark:bg-purple-900 p-8 flex flex-col justify-center rounded-l-lg">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-extrabold text-white">Create an Account</h1>
              <p className="mt-2 text-sm text-gray-300">
                Join our platform to manage your tasks efficiently
              </p>
            </div>
  
            {error && (
              <div className="p-4 mb-6 text-sm rounded-lg bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200">
                {error}
              </div>
            )}
  
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Full Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 dark:bg-gray-700" 
                  required 
                />
              </div>
  
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 dark:bg-gray-700" 
                  required 
                />
              </div>
  
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input 
                  type="password" 
                  id="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 dark:bg-gray-700" 
                  required 
                />
              </div>
  
              <button 
                type="submit" 
                className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-3"
              >
                Create Account
              </button>

              {/* Divider */}
              <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
                <span className="mx-4 text-gray-500 dark:text-gray-400">or</span>
                <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
              </div>

              {/* Google Sign-Up Button */}
              <button 
                type="button"
                className="w-full flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 py-2 rounded-lg"
                onClick={handleGoogleSignUp}
              >
                <FcGoogle className="w-5 h-5" />
                Continue with Google
              </button>
  
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Already have an account?{" "}
                  <span 
                    onClick={() => navigate("/login")} 
                    className="text-blue-600 hover:underline cursor-pointer font-medium"
                  >
                    Sign in
                  </span>
                </p>
              </div>
            </form>
          </div>
  
          {/* Right Section: Image */}
          <div 
            className="w-1/2 h-full bg-cover bg-center flex justify-center items-center text-white" 
            style={{ 
              backgroundImage: "url('https://plus.unsplash.com/premium_photo-1677087123074-60abf3faee6b?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" 
            }}
          >
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
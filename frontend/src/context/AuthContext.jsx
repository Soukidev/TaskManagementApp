import { createContext, useState, useEffect } from "react";
import API from "../api/axios";

// If using Firebase, you'd import Firebase authentication
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "../firebase/firebaseConfig";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      API.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);
      API.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
    } catch (error) {
      console.error("Login failed:", error.response?.data?.message);
      throw error;
    }
  };

  // Register function
  const register = async (name, email, password) => {
    try {
      const res = await API.post("/auth/register", { name, email, password });
      console.log("✅ Registration response:", res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);
      API.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
    } catch (error) {
      console.error(
        "❌ Registration failed:",
        error.response?.data || error.message
      );
      throw error;
    }
  };

  // Google Sign-Up/Sign-In function
  const registerWithGoogle = async () => {
    try {
      // If using Firebase Authentication
      // const provider = new GoogleAuthProvider();
      // const result = await signInWithPopup(auth, provider);
      // const user = result.user;

      // Generic API call - adjust to match your backend implementation
      const res = await API.post("/auth/google-signup", {
        // Typically, you'd send the Google ID token here
        // token: await user.getIdToken(),
        // name: user.displayName,
        // email: user.email
      });

      // Store user and token
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);
      API.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
    } catch (error) {
      console.error("Google Sign-Up failed:", error.response?.data?.message);
      throw error;
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    delete API.defaults.headers.common["Authorization"];
  };

  return (
    <AuthContext.Provider
      value={{ 
        user, 
        setUser, 
        register, 
        login, 
        logout, 
        loading, 
        registerWithGoogle 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
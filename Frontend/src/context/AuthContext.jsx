import { createContext, useState, useEffect } from "react";
import { loginUser, logoutUser, getCurrentUser } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user already logged in
  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const res = await getCurrentUser();
      setUser(res.data.user);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Login
  const login = async data => {
    const res = await loginUser(data);
    setUser(res.data.user);
  };

  // Logout
  const logout = async () => {
    await logoutUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

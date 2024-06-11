import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const logIn = (userInfo) => {
    setIsAuthenticated(true);
    setUser(userInfo);
  };

  const logOut = () => {
    setIsAuthenticated(false);
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

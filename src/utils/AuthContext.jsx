import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("login");
    if (token) {
      // Assume the user is authenticated if the cookie is present
      setIsAuthenticated(true);
      // Optionally, you could also fetch user info from the server here
    }
  }, []);

  const logIn = (userInfo) => {
    setIsAuthenticated(true);
    setUser(userInfo);
    let token = userInfo.token;

    if (token) {
      Cookies.set("login", token, {
        expires: 1,
        sameSite: "Strict",
        secure: true,
      });
    }
  };

  const logOut = () => {
    setIsAuthenticated(false);
    setUser(null);
    Cookies.remove("login");
    Swal.fire({
      icon: "success",
      title: "Logged Out",
      text: "You have been successfully logged out",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

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
    const token = Cookies.get("user_login");
    if (token) {
      // Assume the user is authenticated if the cookie is present
      setIsAuthenticated(true);
      // Optionally, you could also fetch user info from the server here
      const userInfo = JSON.parse(localStorage.getItem("user_info"));
      setUser(userInfo);
    }
  }, []);

  const logIn = (userInfo) => {
    setIsAuthenticated(true);
    setUser(userInfo);
    Cookies.set("user_login", userInfo.token, {
      expires: 1,
      sameSite: "Strict",
      secure: true,
    });
    localStorage.setItem("user_info", JSON.stringify(userInfo));
  };

  const logOut = () => {
    setIsAuthenticated(false);
    setUser(null);
    Cookies.remove("user_login");
    localStorage.removeItem("user_info");
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

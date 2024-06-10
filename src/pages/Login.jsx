import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Components
import Tabs from "../components/Tabs";
import Text from "../components/Text";
import ThemeController from "../components/ThemeController";

const Login = ({ onSuccess }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    window.handleCredentialResponse = (response) => {
      console.log("Encoded JWT ID token: " + response.credential);
      // Lakukan validasi token di backend Anda dan dapatkan informasi pengguna
      onSuccess();
      navigate("/dashboard");
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [navigate, onSuccess]);

  return (
    <div className="bg-base-300 flex items-center justify-center lg:h-screen">
      <ThemeController />
      <div className="flex items-center lg:items-stretch space-y-3 lg:space-y-0 flex-col lg:flex-row lg:justify-around lg:w-3/4">
        <div className="flex justify-center items-center mt-8 lg:mt-0 order-1 lg:order-2 w-3/4 lg:w-1/2">
          <Tabs />
        </div>
        <Text />
      </div>
    </div>
  );
};

export default Login;

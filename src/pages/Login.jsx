import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Tabs from "../components/Tabs";
import Text from "../components/Text";
import ThemeController from "../components/ThemeController";
import { useAuth } from "../utils/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { logIn } = useAuth();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    window.handleCredentialResponse = async (response) => {
      console.log("Encoded JWT ID token: " + response.credential);

      // Kirim token ke backend untuk validasi dan mendapatkan informasi pengguna
      const res = await fetch(
        "https://asia-southeast2-awangga.cloudfunctions.net/domyid/auth/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: response.credential }),
        }
      );

      if (res.ok) {
        const userInfo = await res.json();
        console.log(userInfo);
        logIn(userInfo);
        navigate("/dashboard");
      } else {
        console.error("Login failed");
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [navigate, logIn]);

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

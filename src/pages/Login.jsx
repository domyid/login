import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Tabs from "../components/Tabs";
import Text from "../components/Text";
import ThemeController from "../components/ThemeController";
import { useAuth } from "../utils/AuthContext";
import Swal from "sweetalert2";

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
      try {
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

        const data = await res.json(); // Parse JSON response
        let userInfo = data.user; // Extract userInfo from the response
        userInfo.token = response.credential; // Assign token

        if (res.ok) {
          logIn(data);
          navigate("/dashboard");
        } else {
          console.error("Login failed:", data.message);
          if (res.status === 401) {
            logIn(userInfo);
            await Swal.fire({
              icon: "warning",
              title: "Login Failed",
              text: data.message,
            });
            navigate("/scanqr");
          } else {
            Swal.fire({
              icon: "error",
              title: "Login Failed",
              text: data.message,
            });
          }
        }
      } catch (error) {
        console.error("Error handling credential response:", error);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "An error occurred while processing your login. Please try again.",
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [navigate, logIn]);

  return (
    <div className="bg-base-300 flex items-center justify-center lg:h-screen">
      <ThemeController />
      <div className="flex items-center lg:items-stretch space-y-3 space-x-3 lg:space-y-0 flex-col lg:flex-row lg:justify-around lg:w-3/4">
        <div className="flex justify-center items-center mt-8 lg:mt-0 order-1 lg:order-2 w-3/4 lg:w-1/2">
          <Tabs />
        </div>
        <Text />
      </div>
    </div>
  );
};

export default Login;

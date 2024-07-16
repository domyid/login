import React from "react";
import GoogleSignInButton from "./GoogleSignInButton";
import LoginForm from "./LoginForm";
import { useAuth } from "../utils/AuthContext";
import logo from "../assets/logo.png";

const LoginBox = () => {
  const { logIn } = useAuth();

  return (
    <div className="card flex justify-center flex-col p-8 w-full max-w-sm shadow-lg bg-base-100">
      <div className="md:card-body py-3 md:py-0">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <img
            src={logo}
            alt="doMyId Logo"
            className="mb-4 rounded mix-blend-multiply"
          />
        </div>
        {/* Logo */}

        <div className="flex flex-wrap w-full justify-center p-3">
          <GoogleSignInButton onSuccess={logIn} />
        </div>

        <div className="divider">Login dengan no. handphone</div>

        <LoginForm />
      </div>
    </div>
  );
};

export default LoginBox;

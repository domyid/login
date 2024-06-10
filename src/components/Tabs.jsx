import React from "react";
import { QrCodeElement } from "./QrCodeElement";
import GoogleSignInButton from "./GoogleSignInButton";
import LoginForm from "./LoginForm";
import { useAuth } from "../utils/AuthContext";
import logo from "../assets/logo.png";

const Tabs = () => {
  const { logIn } = useAuth();

  return (
    <div role="tablist" className="tabs tabs-lifted">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Login"
        defaultChecked
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box md:p-6"
      >
        <div className="flex justify-center flex-col p-8 w-full">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <img
              src={logo}
              alt="doMyId Logo"
              className="mb-4 rounded mix-blend-multiply"
            />
          </div>
          {/* Logo */}

          <div className="flex flex-wrap w-full justify-center">
            <GoogleSignInButton onSuccess={logIn} />
          </div>

          <div className="divider">Or continue with</div>

          <LoginForm />

          <div className="mt-3 text-center">
            <button className="text-sky-500">Lupa Password ?</button>
            <p>
              Info ITB Account
              <button className="text-sky-500">Klik ini.</button>
            </p>
          </div>
        </div>
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="QR"
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        <QrCodeElement />
      </div>
    </div>
  );
};

export default Tabs;

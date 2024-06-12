import React, { useEffect } from "react";
import { useAuth } from "../utils/AuthContext";

const WhatsAuthQR = () => {
  const { user } = useAuth();

  useEffect(() => {
    const loadScripts = async () => {
      // Dynamic import of the script
      try {
        const { qrController, deleteCookie } = await import(
          "https://cdn.jsdelivr.net/gh/whatsauth/js@0.2.1/whatsauth.js"
        );
        const { wauthparam } = await import(
          "https://cdn.jsdelivr.net/gh/whatsauth/js@0.2.1/config.js"
        );

        wauthparam.auth_ws =
          "d3NzOi8vYXBpLndhLm15LmlkL3dzL3doYXRzYXV0aC9wdWJsaWM=";
        wauthparam.keyword =
          "aHR0cHM6Ly93YS5tZS82Mjg5NTYwMTA2MDAwMD90ZXh0PXdoNHQ1YXV0aDA=";
        wauthparam.tokencookiehourslifetime = 18;
        wauthparam.redirect = "/auth";
        deleteCookie(wauthparam.tokencookiename);
        qrController(wauthparam);
      } catch (error) {
        console.error("Error loading scripts:", error);
      }
    };

    loadScripts();

    return () => {
      document.body
        .querySelectorAll('script[src*="whatsauth"]')
        .forEach((script) => script.remove());
    };
  }, []);

  return (
    <div
      id="hasphonenumber"
      className="w-full h-screen bg-blue-100 flex items-center justify-center"
    >
      <div className="w-96 bg-white rounded-xl p-4">
        {user && (
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-center">
              Welcome, {user.name}
            </h1>
            <p className="text-center">
              <strong>Email:</strong> {user.email}
            </p>
            <img
              src={user.picture}
              alt={user.name}
              className="max-w-sm rounded-lg shadow-2xl mx-auto"
            />
          </div>
        )}

        <div className="flex justify-center mt-2 mb-4" id="whatsauthqr">
          <span className="loading loading-dots loading-lg"></span>
        </div>
        <p className="font-bold text-center mb-4" id="whatsauthcounter">
          counter
        </p>
      </div>
    </div>
  );
};

export default WhatsAuthQR;

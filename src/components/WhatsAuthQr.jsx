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
      className="w-full min-h-screen bg-blue-50 flex items-center justify-center"
    >
      <div className="w-96 bg-white rounded-xl p-6 shadow-lg">
        {user ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Welcome, {user.name}</h1>
            <p className="mt-5 mb-5 badge badge-primary">
              <strong>Email:</strong> {user.email}
            </p>

            <div class="w-24 shadow-2xl rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={user.picture}
                alt={user.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 shadow-2xl"
              />
            </div>

            <p className="text-gray-700">
              Please scan the QR code with your WhatsApp camera to provide your
              phone number.
            </p>
          </div>
        ) : (
          <span className="loading loading-dots loading-lg"></span>
        )}

        <div className="flex justify-center mt-4 mb-4" id="whatsauthqr">
          <span className="loading loading-dots loading-lg"></span>
        </div>
        <p
          className="font-bold text-center text-gray-700 mb-4"
          id="whatsauthcounter"
        >
          Counter
        </p>
      </div>
    </div>
  );
};

export default WhatsAuthQR;

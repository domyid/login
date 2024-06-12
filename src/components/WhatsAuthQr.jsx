import React, { useEffect } from "react";
import { useAuth } from "../utils/AuthContext";

const WhatsAuthQR = () => {
  const { user } = useAuth();

  useEffect(() => {
    const loadScripts = async () => {
      const script1 = document.createElement("script");
      script1.src =
        "https://cdn.jsdelivr.net/gh/whatsauth/js@0.2.1/whatsauth.js";
      script1.async = true;
      document.body.appendChild(script1);

      const script2 = document.createElement("script");
      script2.src = "https://cdn.jsdelivr.net/gh/whatsauth/js@0.2.1/config.js";
      script2.async = true;
      document.body.appendChild(script2);

      script1.onload = () => {
        script2.onload = () => {
          window.wauthparam.auth_ws =
            "d3NzOi8vYXBpLndhLm15LmlkL3dzL3doYXRzYXV0aC9wdWJsaWM=";
          window.wauthparam.keyword =
            "aHR0cHM6Ly93YS5tZS82Mjg5NTYwMTA2MDAwMD90ZXh0PXdoNHQ1YXV0aDA=";
          window.wauthparam.tokencookiehourslifetime = 18;
          window.wauthparam.redirect = "/auth";
          window.deleteCookie(window.wauthparam.tokencookiename);
          window.qrController(window.wauthparam);
        };
      };
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
          <svg
            className="lds-microsoft"
            width="80px"
            height="80px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <g transform="rotate(0)">
              <circle
                cx="81.73413361164941"
                cy="74.35045716034882"
                fill="#e15b64"
                r="5"
                transform="rotate(340.001 49.9999 50)"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  calcMode="spline"
                  values="0 50 50;360 50 50"
                  times="0;1"
                  keySplines="0.5 0 0.5 1"
                  repeatCount="indefinite"
                  dur="1.5s"
                  begin="0s"
                ></animateTransform>
              </circle>
              <circle
                cx="74.35045716034882"
                cy="81.73413361164941"
                fill="#f47e60"
                r="5"
                transform="rotate(348.352 50.0001 50.0001)"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  calcMode="spline"
                  values="0 50 50;360 50 50"
                  times="0;1"
                  keySplines="0.5 0 0.5 1"
                  repeatCount="indefinite"
                  dur="1.5s"
                  begin="-0.0625s"
                ></animateTransform>
              </circle>
              <circle
                cx="65.3073372946036"
                cy="86.95518130045147"
                fill="#f8b26a"
                r="5"
                transform="rotate(354.236 50 50)"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  calcMode="spline"
                  values="0 50 50;360 50 50"
                  times="0;1"
                  keySplines="0.5 0 0.5 1"
                  repeatCount="indefinite"
                  dur="1.5s"
                  begin="-0.125s"
                ></animateTransform>
              </circle>
              <circle
                cx="55.22104768880207"
                cy="89.65779445495241"
                fill="#abbd81"
                r="5"
                transform="rotate(357.958 50.0002 50.0002)"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  calcMode="spline"
                  values="0 50 50;360 50 50"
                  times="0;1"
                  keySplines="0.5 0 0.5 1"
                  repeatCount="indefinite"
                  dur="1.5s"
                  begin="-0.1875s"
                ></animateTransform>
              </circle>
              <circle
                cx="44.77895231119793"
                cy="89.65779445495241"
                fill="#849b87"
                r="5"
                transform="rotate(359.76 50.0064 50.0064)"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  calcMode="spline"
                  values="0 50 50;360 50 50"
                  times="0;1"
                  keySplines="0.5 0 0.5 1"
                  repeatCount="indefinite"
                  dur="1.5s"
                  begin="-0.25s"
                ></animateTransform>
              </circle>
              <circle
                cx="34.692662705396415"
                cy="86.95518130045147"
                fill="#e15b64"
                r="5"
                transform="rotate(0.183552 50 50)"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  calcMode="spline"
                  values="0 50 50;360 50 50"
                  times="0;1"
                  keySplines="0.5 0 0.5 1"
                  repeatCount="indefinite"
                  dur="1.5s"
                  begin="-0.3125s"
                ></animateTransform>
              </circle>
              <circle
                cx="25.649542839651176"
                cy="81.73413361164941"
                fill="#f47e60"
                r="5"
                transform="rotate(1.86457 50 50)"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  calcMode="spline"
                  values="0 50 50;360 50 50"
                  times="0;1"
                  keySplines="0.5 0 0.5 1"
                  repeatCount="indefinite"
                  dur="1.5s"
                  begin="-0.375s"
                ></animateTransform>
              </circle>
              <circle
                cx="18.2658663883506"
                cy="74.35045716034884"
                fill="#f8b26a"
                r="5"
                transform="rotate(5.45126 50 50)"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  calcMode="spline"
                  values="0 50 50;360 50 50"
                  times="0;1"
                  keySplines="0.5 0 0.5 1"
                  repeatCount="indefinite"
                  dur="1.5s"
                  begin="-0.4375s"
                ></animateTransform>
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                calcMode="spline"
                values="0 50 50;0 50 50"
                times="0;1"
                keySplines="0.5 0 0.5 1"
                repeatCount="indefinite"
                dur="1.5s"
              ></animateTransform>
            </g>
          </svg>
        </div>
        <p className="font-bold text-center mb-4" id="whatsauthcounter">
          counter
        </p>
      </div>
    </div>
  );
};

export default WhatsAuthQR;

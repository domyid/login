import React from "react";
import Turnstile, { useTurnstile } from "react-turnstile";

const TurnstileWidget = ({ onToken }) => {
  const turnstile = useTurnstile();

  return (
    <div className="flex flex-wrap max-w-sm justify-center mt-4">
      <Turnstile
        sitekey="0x4AAAAAAAfj2PR-4GafelYT"
        onVerify={(token) => {
          onToken(token);
          // Optionally reset Turnstile on failed response
          fetch(
            "https://asia-southeast2-awangga.cloudfunctions.net/domyid/auth/login",
            {
              method: "POST",
              body: JSON.stringify({ token }),
            }
          ).then((response) => {
            if (!response.ok) turnstile.reset();
          });
        }}
        theme="light"
      />
    </div>
  );
};

export default TurnstileWidget;

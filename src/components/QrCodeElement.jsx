import React from "react";
import GenerateQrCode from "../utils/GenerateQrCode";

export const QrCodeElement = () => {
  const text = "https://wa.me/6285314267742?text=missyouuu";
  const size = 300;
  return (
    <div>
      <GenerateQrCode text={text} size={size} />
    </div>
  );
};

import { useEffect, useRef } from "react";
import qrcode from "qrcode-generator-es6";

const useQrCode = (text, size) => {
  const qrCodeContainerRef = useRef(null);

  useEffect(() => {
    const qrc = new qrcode(0, "H");
    qrc.addData(text);
    qrc.make();
    let qr = qrc.createSvgTag({ cellSize: 8, margin: 4 });

    // Create a wrapper div to set the size
    const wrapper = document.createElement("div");
    wrapper.innerHTML = qr;
    const svg = wrapper.firstChild;
    svg.setAttribute("width", size);
    svg.setAttribute("height", size);

    // Append to the container
    const qrCodeContainer = qrCodeContainerRef.current;
    qrCodeContainer.innerHTML = "";
    qrCodeContainer.appendChild(wrapper);
  }, [text, size]);

  return qrCodeContainerRef;
};

export default useQrCode;

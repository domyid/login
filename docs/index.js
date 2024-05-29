import qrcode from "https://cdn.skypack.dev/qrcode-generator-es6";


 function makeQrCode(text, size) {
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

   const qrCodeContainer = document.getElementById("qrCodeContainer");
   qrCodeContainer.innerHTML = "";
   qrCodeContainer.appendChild(wrapper);
 }

 document.addEventListener("DOMContentLoaded", function () {
   makeQrCode("https://wa.me/6285314267742?text=missyouuu", 350);
 });


function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log("Name: " + profile.getName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
}
 

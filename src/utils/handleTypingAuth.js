import Swal from "sweetalert2";

const handleTypingAuth = async (e, phoneNumber, navigate) => {
  e.preventDefault();

  try {
    // Confirm sending password via WhatsApp
    const result = await Swal.fire({
      title: "Confirm Phone Number",
      text: `A login password will be sent to ${phoneNumber} via WhatsApp. Do you want to continue?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, send it!",
      cancelButtonText: "No, cancel",
    });

    if (!result.isConfirmed) {
      return; // Exit if the user cancels the action
    }

    // Send phoneNumber to the server
    const response = await fetch(
      "https://asia-southeast2-awangga.cloudfunctions.net/domyid/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phonenumber: phoneNumber }),
      }
    );

    // Check if the response is not OK (status code outside 200-299 range)
    if (!response.ok) {
      const responseData = await response.json();
      console.log("Detailed Error Info:", responseData); // Log detail error dari server
      throw new Error(responseData.response);
    }

    const responseData = await response.json();

    // Display success message
    Swal.fire({
      icon: "success",
      title: "Password Sent",
      text: `A login password has been sent to ${phoneNumber}!`,
      showConfirmButton: false,
      timer: 2000,
    }).then(() => {
      navigate("/stp"); // Redirect to STP page
    });
  } catch (error) {
    console.error("Error:", error);
    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: error.message,
    });
  }
};

export default handleTypingAuth;

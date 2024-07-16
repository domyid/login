import Swal from "sweetalert2";

const handleTypingAuth = async (e, phoneNumber, navigate) => {
  e.preventDefault();

  try {
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

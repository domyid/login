import Swal from "sweetalert2";
import bcrypt from "bcryptjs";

const handleTypingAuth = async (e, phoneNumber, password) => {
  e.preventDefault();

  try {
    // Hash the password using bcryptjs
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Debugging: log input user dan hashed password
    console.log("Phone Number:", phoneNumber);
    console.log("Password:", password);
    console.log("Hashed Password:", hashedPassword);

    // Send phoneNumber and hashedPassword to the server
    const response = await fetch(
      "https://asia-southeast2-awangga.cloudfunctions.net/domyid/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phonenumber: phoneNumber,
          password: hashedPassword,
        }),
      }
    );

    // Check if the response is not OK (status code outside 200-299 range)
    if (!response.ok) {
      const responseData = await response.json();
      console.log("Detailed Error Info:", responseData); // Log detail error dari server
      throw new Error(responseData.response);
    }

    const responseData = await response.json();

    console.log(responseData);

    // Display success message
    Swal.fire({
      icon: "success",
      title: "Login Successful",
      text: `Welcome, ${responseData.user.name}!`,
    });

    // Redirect or handle successful login
    window.location.href = "https://www.do.my.id/dashboard/";
  } catch (error) {
    console.error("Error:", error);
    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: error.message,
    });
  }
};

export default handleTypingAuth
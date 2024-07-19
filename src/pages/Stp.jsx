import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import Cookies from "js-cookie";
import Countdown from "react-countdown";

const STP = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [counter, setCounter] = useState(240000); // 4 minutes in milliseconds for react-countdown
  const phoneNumber = location.state?.phoneNumber || "";

  useEffect(() => {
    if (!phoneNumber) {
      Swal.fire({
        icon: "error",
        title: "Unauthorized Access",
        text: "Please input your phone number on the login page.",
        confirmButtonText: "Go to Login",
      }).then(() => {
        navigate("/login"); // Redirect to the login page
      });
    }
  }, [phoneNumber, navigate]);

  useEffect(() => {
    // Enable resend button when counter reaches 0
    if (counter === 0) {
      const resendButton = document.getElementById("resendButton");
      if (resendButton) {
        resendButton.disabled = false;
      }
    }
  }, [counter]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://asia-southeast2-awangga.cloudfunctions.net/domyid/auth/verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phonenumber: phoneNumber, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have successfully logged in.",
        }).then(() => {
          // Set the cookie token
          Cookies.set("login", data.token, {
            expires: 1,
            sameSite: "Strict",
            secure: true,
            path: "/", // Set the domain to allow access across subdomains
          });

          // Wait until the cookie is set before redirecting
          setTimeout(() => {
            window.location.href = "https://www.do.my.id/dashboard/";
          }, 100); // Adjust delay as needed
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: data.message,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Failed to verify password.",
      });
    }
  };

  const handleResendPassword = async () => {
    try {
      // Send phoneNumber to the server to resend the password
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

      const responseData = await response.json();

      // Check if the response is not OK (status code outside 200-299 range)
      if (!response.ok) {
        // console.log("Detailed Error Info:", responseData); // Log detail error dari server
        throw new Error(
          responseData.message ||
            responseData.response ||
            "Error resending password"
        );
      }

      // Display success message
      Swal.fire({
        icon: "success",
        title: "Password Sent",
        text: `A login password has been resent to ${phoneNumber}!`,
        showConfirmButton: false,
        timer: 2000,
      });

      // Reset counter after resending password
      setCounter(240000); // Reset counter to 4 minutes in milliseconds
      const resendButton = document.getElementById("resendButton");
      if (resendButton) {
        resendButton.disabled = true;
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Resend Failed",
        text: error.message,
      });
    }
  };

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      const resendButton = document.getElementById("resendButton");
      if (resendButton) {
        resendButton.disabled = false;
      }
      return (
        <span className="text-error">
          Password has expired, please resend password
        </span>
      );
    } else {
      return (
        <span className="countdown font-mono text-2xl">
          <span style={{ "--value": minutes }}></span>:
          <span style={{ "--value": seconds }}></span>
        </span>
      );
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex justify-center items-center">
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <div className="card-head text-center">
            <h1 className="card-title font-thin">
              Password has been sent via WhatsApp to
            </h1>
            <div className="card-user_info flex justify-center items-center py-2 gap-2">
              <FaWhatsapp className="text-3xl" />
              <span className="font-bold text-2xl">{phoneNumber}</span>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-control mt-5">
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="password"
                  className="grow"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Verify
              </button>
            </div>
          </form>
          <div className="mt-3">
            <p>
              Resend password in:{" "}
              <Countdown date={Date.now() + counter} renderer={renderer} />
            </p>
            <button
              id="resendButton"
              className="btn btn-outline btn-primary mt-2"
              onClick={handleResendPassword}
              disabled={counter > 0}
            >
              Resend Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default STP;

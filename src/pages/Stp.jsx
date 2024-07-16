import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const STP = () => {
  const [password, setPassword] = useState("");
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (counter === 0) {
      // Resend password logic here
      Swal.fire({
        icon: "info",
        title: "Resending Password",
        text: "Your password will be resent shortly.",
      });
      // Call your backend to resend the password
      setCounter(60); // Reset counter
    }
  }, [counter]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have successfully logged in.",
        }).then(() => {
          window.location.href = "https://www.do.my.id/dashboard/";
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: data.message,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Failed to verify password.",
      });
    }
  };

  return (
    <div>
      <h1>Enter the Password Sent to Your WhatsApp</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
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
        <p>Resend password in: {counter} seconds</p>
      </div>
    </div>
  );
};

export default STP;

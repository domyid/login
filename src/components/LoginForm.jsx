import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import handleTypingAuth from "../utils/handleTypingAuth";

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(null);
  const navigate = useNavigate();

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^(?:\+62|62|0)?[2-9]\d{8,11}$/;
    return phoneRegex.test(number);
  };

  const handleChange = (e) => {
    const number = e.target.value;
    setPhoneNumber(number);
    if (validatePhoneNumber(number)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <form onSubmit={(e) => handleTypingAuth(e, phoneNumber, navigate)}>
      <div className="form-control">
        <label
          className={`input input-bordered flex items-center gap-2 ${
            isValid === null ? "" : isValid ? "input-success" : "input-error"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={handleChange}
          />
          {isValid !== null &&
            (isValid ? (
              <FaCheckCircle className="text-success" />
            ) : (
              <FaTimesCircle className="text-error" />
            ))}
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary" type="submit" disabled={!isValid}>
          Berikutnya
        </button>
      </div>
    </form>
  );
};

export default LoginForm;

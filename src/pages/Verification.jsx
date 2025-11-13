import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/Verification.css";
import BackButton from "../components/BackButton";
import illustration from "../assets/forgot-illustration.svg";
import alertIcon from "../assets/error.svg";

const Verification = () => {
  const [otpCode, setOtpCode] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^\d{6}$/.test(otpCode)) {
      setErrorMsg("The code you entered is not valid. Please check the code and try again.");
    } else {
      setErrorMsg("");
      navigate("/reset-password");
    }
  };

  return (
    <div className="codeverify-container">
      {/* Back Button */}
      <BackButton to="/forgot-password" />

      {/* Left Side */}
      <div className="codeverify-left">
        <div className="codeverify-header">
          <h2 className="codeverify-title">Verification</h2>
          <p className="codeverify-subtext">
            For your security, we've sent a verification code to your registered email.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="codeverify-form">
          {/* OTP Input */}
          <div className={`codeverify-inputbox ${errorMsg ? "has-error" : ""}`}>
            <input
              type="text"
              value={otpCode}
              onChange={(e) => {
                setOtpCode(e.target.value);
                setErrorMsg("");
              }}
              placeholder=""
              maxLength="6"
              required
              autoComplete="off"
            />
          </div>

          {/* Error Message */}
          {errorMsg && (
            <div className="codeverify-errorbox">
              <img src={alertIcon} alt="Error" className="codeverify-erroricon" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Resend Info */}
          <div className="codeverify-resend">
            <p className="codeverify-resendtext">
              Not received? <span className="codeverify-resendlink">Resend code</span>
            </p>
            <p className="codeverify-waittext">
              Please wait 5 minutes before requesting another code.
            </p>
          </div>

          {/* Submit Button */}
          <button type="submit" className="codeverify-btn">
            Submit
          </button>
        </form>
      </div>

      {/* Right Side */}
      <div className="codeverify-right">
        <img
          src={illustration}
          alt="Verification Illustration"
          className="codeverify-illustration"
        />
      </div>
    </div>
  );
};

export default Verification;

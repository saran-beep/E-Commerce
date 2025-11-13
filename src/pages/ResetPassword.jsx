import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ResetPassword.css";
import BackButton from "../components/BackButton";
import illustration from "../assets/reset-illustration.svg";

const ResetPassword = () => {
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [activeField, setActiveField] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newPass || !confirmPass) {
      setErrorMsg("Please fill in both fields.");
    } else if (newPass.length < 6) {
      setErrorMsg("Password must be at least 6 characters long.");
    } else if (newPass !== confirmPass) {
      setErrorMsg("Passwords do not match.");
    } else {
      setErrorMsg("");
      alert("✅ Password reset successful!");
      navigate("/login");
    }
  };

  return (
    <div className="pwreset-container">
      <BackButton to="/signup" />

      <div className="pwreset-content">
        <div className="pwreset-left">
          <h1 className="pwreset-title">Reset Password</h1>

          <form onSubmit={handleSubmit} className="pwreset-form">
            <div
              className={`pwreset-inputwrap ${
                activeField === "newPass" || newPass ? "active" : ""
              }`}
            >
              <input
                type="password"
                id="newPass"
                value={newPass}
                onChange={(e) => setNewPass(e.target.value)}
                onFocus={() => setActiveField("newPass")}
                onBlur={() => setActiveField("")}
                required
              />
              <label htmlFor="newPass">Enter New Password</label>
            </div>

            <div
              className={`pwreset-inputwrap ${
                activeField === "confirmPass" || confirmPass ? "active" : ""
              }`}
            >
              <input
                type="password"
                id="confirmPass"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                onFocus={() => setActiveField("confirmPass")}
                onBlur={() => setActiveField("")}
                required
              />
              <label htmlFor="confirmPass">Re-enter Password</label>
            </div>

            {errorMsg && <p className="pwreset-error">{errorMsg}</p>}

            <button type="submit" className="pwreset-btn">
              Submit
            </button>
          </form>
        </div>

        <div className="pwreset-right">
          <img
            src={illustration}
            alt="Password Reset Illustration"
            className="pwreset-image"
          />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

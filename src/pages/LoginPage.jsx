import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "../styles/LoginPage.css";
import iconBack from "../assets/back.svg";
import imgLogin from "../assets/login-illustration.svg";
import iconGoogle from "../assets/google.svg";
import iconFacebook from "../assets/facebook.svg";

const LoginPage = () => {
  const [activeField, setActiveField] = useState(null);

  return (
    <div className="auth-login-wrapper">
      <div className="auth-login-left">
        <button className="auth-back-btn">
          <img src={iconBack} alt="Back" />
        </button>

        <h2 className="auth-login-title">Login</h2>

        <form className="auth-login-form">
          <div
            className={`auth-input-group ${activeField === "email" ? "active" : ""}`}
          >
            <input
              type="email"
              required
              onFocus={() => setActiveField("email")}
              onBlur={() => setActiveField(null)}
            />
            <label>Email Address</label>
          </div>

          <div
            className={`auth-input-group ${activeField === "password" ? "active" : ""}`}
          >
            <input
              type="password"
              required
              onFocus={() => setActiveField("password")}
              onBlur={() => setActiveField(null)}
            />
            <label>Password</label>
          </div>

          <Link to="/forgot-password" className="auth-forgot-link">
            Forgot password?
          </Link>

          <button type="submit" className="auth-login-btn">
            Login
          </button>

          <div className="auth-or-divider">Or</div>

          <button className="auth-social-btn google">
            <img src={iconGoogle} alt="Google" />
            Login with Google
          </button>

          <button className="auth-social-btn facebook">
            <img src={iconFacebook} alt="Facebook" />
            Login with Facebook
          </button>
        </form>
      </div>

      <div className="auth-login-right">
        <img
          src={imgLogin}
          alt="Login Illustration"
          className="auth-login-illustration"
        />
      </div>
    </div>
  );
};

export default LoginPage;

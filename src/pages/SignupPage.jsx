import React, { useState } from "react";
import "../styles/Signup.css";
import registerIllustration from "../assets/signup-illustration.svg";
import googleIcon from "../assets/google.svg";
import facebookIcon from "../assets/facebook.svg";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <h2 className="register-title">Create Account</h2>

        <form className="register-form">
          {[
            { name: "email", label: "Email Address", type: "email" },
            { name: "mobile", label: "Mobile Number", type: "tel" },
            { name: "password", label: "Password", type: "password" },
            { name: "confirmPassword", label: "Re-enter Password", type: "password" },
          ].map((field) => (
            <div className="register-inputbox" key={field.name}>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required
              />
              <label className={formData[field.name] ? "filled" : ""}>
                {field.label}
              </label>
            </div>
          ))}

          <button type="submit" className="register-btn">
            Sign Up
          </button>

          <p className="register-logintext">
            Already have an account?{" "}
            <Link to="/login" className="register-loginlink">
              Login
            </Link>
          </p>

          <div className="register-divider">Or</div>

          <button className="register-socialbtn google">
            <img src={googleIcon} alt="Google" />
            Sign Up with Google
          </button>

          <button className="register-socialbtn facebook">
            <img src={facebookIcon} alt="Facebook" />
            Sign Up with Facebook
          </button>
        </form>
      </div>

      <div className="register-right">
        <img
          src={registerIllustration}
          alt="Signup Illustration"
          className="register-illustration"
        />
      </div>
    </div>
  );
};

export default SignupPage;

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "animate.css";
import { TwitterxIcon } from "../icons/TwitterxIcon";
import { InstaIcon } from "../icons/InstaIcon";
import { FbIcon } from "../icons/FbIcon";
import Alert from "../components/Alert";
import logo from "../assets/logo.png";

function Signup() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    phone: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [errorMsg, setErrorMsg] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleErrorMsg = (msg) => {
    setErrorMsg(msg);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setErrorMsg("");
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, confirmPassword, ...rest } = formData;
    if (password !== confirmPassword) {
      handleErrorMsg("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/register",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data.message);
      handleErrorMsg(error.response.data.message);
    }
  };

  return (
    <section className="signup-section">
      <div className="signup-section-container animate__animated animate__backInDown">
        <div className="signup-section-box">
          <div className="signup-section-heading">
            <a href="/" className="signup-section-title">
              <img
                src={logo}
                alt="logo"
                className="logo animate__animated animate__bounceInUp"
              />
            </a>
            <p className="signup-section-text">
              Get started with a new account.
            </p>
          </div>
          <div className="signup-section-body">
            <form onSubmit={handleSubmit} className="signup-section-form">
              <div className="signup-section-input">
                <label htmlFor="name">full name</label>
                <input
                  type="text"
                  name="full_name"
                  id="full-name"
                  placeholder="enter your full name"
                  pattern="[a-zA-Z\s]*"
                  value={formData.full_name}
                  onChange={handleChange}
                />
              </div>
              <div className="signup-section-input">
                <label htmlFor="email">email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="signup-section-input">
                <label htmlFor="phone">phone number</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="signup-section-input">
                <label htmlFor="password">password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="signup-section-input">
                <label htmlFor="confirm-password">confirm password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirm-password"
                  placeholder="confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="signup-section-btn">
                signup
              </button>
            </form>
            <Link to="/login" className="signup-section-link">
              Already have an account? Sign in
            </Link>
          </div>
          <div className="signup-section-footer">
            <a href="" className="social-media">
              <TwitterxIcon />
            </a>
            <a href="" className="social-media">
              <InstaIcon />
            </a>
            <a href="" className="social-media">
              <FbIcon />
            </a>
          </div>
        </div>
      </div>
      <Alert msg={errorMsg} classes={showAlert ? "alert-danger" : "hidden"} />
    </section>
  );
}

export default Signup;

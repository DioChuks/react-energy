import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { TwitterxIcon } from "../icons/TwitterxIcon";
import { InstaIcon } from "../icons/InstaIcon";
import { FbIcon } from "../icons/FbIcon";
import Alert from "../components/Alert";
import logo from "../assets/logo.png";
import "animate.css";
import {apiUrl} from './api';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [responseMsg, setResponseMsg] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const handleResponse = (msg) => {
    setResponseMsg(msg);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setResponseMsg("");
    }, 3000);
  };

  let data = "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowLoading(true);

    try {
      const response = await axios.post(
        `${apiUrl}/login`,
        formData
      );
      console.log(response.data);
      setShowLoading(false);
      handleResponse(response.data.message);
      data = response.data.data;
      if (data.user.email_verified_at === null){
        return navigate("/verify-email", { state: data});
      }
      navigate("/partner/user", { state: data });
    } catch (error) {
      console.error(error.response.data.message);
      setShowLoading(false);
      handleResponse(error.response.data.message);
    }
  };
  return (
    <section className="login-section">
      <div className="login-section-container animate__animated animate__backInDown">
        <div className="login-section-box">
          <div className="login-section-heading">
            <a href="/" className="login-section-title">
              <img
                src={logo}
                alt="logo"
                className="logo animate__animated animate__bounceInUp"
              />
            </a>
            <p className="login-section-text">Sign in to your account.</p>
          </div>
          <div className="login-section-body">
            <form onSubmit={handleSubmit} className="login-section-form">
              <div className="login-section-input">
                <label htmlFor="email">email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="login-section-input">
                <label htmlFor="password">password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="login-section-btn">
                Login
              </button>
            </form>
            <Link to="/sign-up" className="login-section-link">
              Don't have an account yet? Sign up
            </Link>
          </div>
          <div className="login-section-footer">
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
      <Alert msg={responseMsg} classes={showAlert ? "alert-danger" : "hidden"} />
      <Alert msg={""} classes={showLoading ? "alert-loading" : "hidden"} />
    </section>
  );
}

export default Login;

import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { TwitterxIcon } from "../icons/TwitterxIcon";
import { InstaIcon } from "../icons/InstaIcon";
import { FbIcon } from "../icons/FbIcon";
import Alert from "../components/Alert";
import logo from "../assets/logo.png";
import "animate.css";
import { apiUrl } from "./api";

function EmailVerify() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  const [formData, setFormData] = useState({
    user_id: data.user.id,
    otp: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowLoading(true);
    const headers = { 'Authorization': `Bearer ${data.token}` };

    try {
      const response = await axios.post(
        `${apiUrl}/email/otp/verify`,
        formData,
        {headers}
      );
      console.log(response.data);
      setShowLoading(false);
      handleResponse(response.data.message);
      navigate("/partner/user", { state: data });
    } catch (error) {
      console.error(error.response.data.message);
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
            <p className="login-section-text">
              We need to confirm your account
            </p>
          </div>
          <div className="login-section-body">
            <form onSubmit={handleSubmit} className="login-section-form">
              <div className="login-section-input">
                <label htmlFor="email">email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="greyedOut"
                  value={data.user.email}
                  onChange={handleChange}
                  disabled
                />
              </div>
              <div className="login-section-input">
                <label htmlFor="otp">code</label>
                <input
                  type="text"
                  name="otp"
                  id="otp"
                  value={formData.otp}
                  placeholder="enter code here"
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="login-section-btn">
                submit
              </button>
            </form>
            <span className="login-section-link">
              An email with a code has been sent to your address.
            </span>
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

export default EmailVerify;

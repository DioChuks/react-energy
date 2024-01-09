import axios from "axios";
import { apiUrl } from "../routes/api";
import { useState } from "react";

function Footer() {
  const [setEmail, setEmailState] = useState("");
  const [setMsg, setMsgState] = useState("");
  const handleSubscribe = async (email) => {
    try {
      const response = await axios.post(`${apiUrl}/newsletter-subscribe`, {
        email,
      });
      console.log(response.data);
      setMsgState(response.data.message);
      setTimeout(() => {
        setMsgState("");
      }, 2000);
    } catch (error) {
      console.error(error.response?.data?.message || error.message);
      setMsgState(error.response?.data?.message || error.message);
      setTimeout(() => {
        setMsgState("");
      }, 2000);
    }
  };
  const handleEmailChange = (e) => {
    setEmailState(e.target.value);
  };
  const handleSubscribeClick = () => {
    handleSubscribe(setEmail);
  };

  return (
    <section className="footer-section">
      <div className="footer-section-container">
        <div className="footer-section-box">
          <div className="footer-section-heading animate__animated animate__backInUp">
            <h2 className="footer-section-title">Ecohavest</h2>
            <h3 className="footer-section-subtitle">
              Empowering a Sustainable Tomorrow: Clean Energy Solutions for a
              Greener World
            </h3>
          </div>
          <div className="footer-section-body animate__animated animate__bounceInLeft">
            <div className="footer-section-form">
              <label htmlFor="news">Newsletter</label>
              <div className="news-input">
                <input
                  className="input"
                  type="email"
                  name="email"
                  id="news"
                  onChange={handleEmailChange}
                />
                <button
                  className="btn-news"
                  type="submit"
                  onClick={handleSubscribeClick}
                >
                  submit
                </button>
              </div>
              <span className={setMsg ? 'fade-up active':'fade-up'}>{setMsg}</span>
            </div>
            <hr />
            <h5>
              Copyright &#8167; 2019 - {new Date().getFullYear()} Ecohavest. All
              rights reserved.
            </h5>
            <span>
              <a href="#">Terms</a> | <a href="#services">Services</a> |{" "}
              <a href="#">Privacy</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

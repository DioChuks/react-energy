import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link, Outlet } from "react-router-dom";
import axios from "axios";

import "./Dashboard.css";
import logo from "../../assets/logo.png";
import { PowerIcon } from "../../icons/PowerIcon";
import Footer from "../../components/Footer";

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state || {}; // Handle potential undefined state

  const [isLoggedIn, setIsLoggedIn] = useState(!!data.token); // Use token to determine initial state

  useEffect(() => {
    if (!data.token) {
      navigate("/login");
    }
  }, [data.token, navigate]);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:8000/api/logout",
        {},
        {
          headers: { Authorization: `Bearer ${data.token}` },
        }
      );
      localStorage.clear();
      sessionStorage.clear();
      setIsLoggedIn(false);
    } catch (error) {
      console.error(error.response.data.message);
    } finally {
      setTimeout(() => {
        navigate("/login");
      }, 2500);
    }
  };
  return isLoggedIn ? (
    <>
      <section className="dashboard-section">
        <div className="dashboard-container">
          <header className="dashboard-header">
            <img src={logo} alt="logo" className="logo" />
            <nav className="dashboard-nav">
              <Link className="d-nav-item" to="/partner/user">
                Dashboard
              </Link>
              <Link className="d-nav-item" to="/partner/inventory">
                Inventory
              </Link>
              <Link className="d-nav-item" to="/partner/kyc">
                KYC
              </Link>
              <Link className="d-nav-item" to="/partner/invest">
                Invest
              </Link>
              <Link className="d-nav-item" to="/partner/transactions">
                Transactions
              </Link>
              <Link className="d-nav-item" to="/partner/profile">
                Profile
              </Link>
            </nav>
            <div className="static-icon" onClick={handleLogout}>
              <PowerIcon />
            </div>
          </header>
          <Outlet />
        </div>
      </section>
      <Footer />
    </>
  ) : (
    <div className="isLoggedOut">Logged Out 🌩</div>
  );
}

export default Dashboard;

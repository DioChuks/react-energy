import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link, Outlet } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../routes/api";
import "./Dashboard.css";
import logo from "../../assets/logo.png";
import { PowerIcon } from "../../icons/PowerIcon";
import Footer from "../../components/Footer";
import NavList from "./NavList";

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.post(`${apiUrl}/check-auth`, {
          token: location.state?.token,
        },
        {
          headers: { Authorization: `Bearer ${location.state?.token}` },
        });
        setIsLoggedIn(response.data.isAuthenticated);
      } catch (error) {
        console.error(error.response?.data?.message || error.message);
        setIsLoggedIn(false);
        navigate("/login");
      }
    };

    checkAuthentication();
  }, [location.state?.token, navigate]);

  const handleNavigate = (routeName) => {
    navigate(routeName, { state: location.state });
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        `${apiUrl}/logout`,
        {},
        {
          headers: { Authorization: `Bearer ${location.state?.token}` },
        }
      );
      localStorage.clear();
      sessionStorage.clear();
      setIsLoggedIn(false);
      navigate("/login");
    } catch (error) {
      console.error(error.response?.data?.message || error.message);
    }
  };

  return isLoggedIn ? (
    <>
      <section className="dashboard-section">
        <div className="dashboard-container">
          <header className="dashboard-header">
            <img src={logo} alt="logo" className="logo" />
            <nav className="dashboard-nav">
              {Object.entries(NavList).map(([key, value]) => (
                <button
                  key={key}
                  className="d-nav-item"
                  onClick={() => handleNavigate(value)}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </button>
              ))}
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
    <div className="isLoggedOut">Loading 🌩</div>
  );
}

export default Dashboard;

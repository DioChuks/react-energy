import "animate.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Main() {
  const location = useLocation();
  const [hasData, setHasData] = useState(!!location.state);
  const [percent, setPercent] = useState(50);

  useEffect(() => {
    setHasData(!!location.state);
  }, [location.state]);

  const circleStyles = {
    backgroundImage: `conic-gradient(#cecece ${percent}%, aliceblue 0)`,
  }

  const renderMainContent = () => {
    const { user } = location.state || {};
    return (
      <>
        <div className="user-section">
          <div className="wrap-circles">
            <div className="circle" style={circleStyles}>
              <div className="inner">{percent}%</div>
            </div>
          </div>

          <div className="dashboard-info animate__animated animate__bounceInDown">
            <div className="dashboard-user-info">
              <h1 className="greetings">Welcome {user?.first_name}</h1>
              <p>
                KYC Status:{" "}
                <span>
                  {user?.kyc
                    ? "We can vouch for you! 🤝"
                    : "We truly don't know you 🤷🏻‍♂️"}
                </span>
              </p>
              <p>Tier: Copper</p>
              <p>
                Invested: <span>${user?.balance}</span>
              </p>
              <p>
                ROI: <span>10%</span>
              </p>
            </div>
          </div>
        </div>
        <div className="investment-history">
          <div className="table">
            <ul className="table-list">
              <li>s/n</li>
              <li>Amount</li>
              <li>Solar Power</li>
              <li>Transaction Date</li>
            </ul>
            <ul className="table-list">
              <li>1</li>
              <li>$10000</li>
              <li>10kEV</li>
              <li>06/01/2024</li>
            </ul>
          </div>
        </div>
      </>
    );
  };

  return hasData ? (
    renderMainContent()
  ) : (
    <img src="#" onLoad={() => setHasData(false)} alt="Loading..." />
  );
}

export default Main;

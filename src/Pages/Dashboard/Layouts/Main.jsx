import 'animate.css';
import { useLocation } from "react-router-dom";

function Main() {
  const location = useLocation();
  const data = location.state;
  return (
    <>
      <div className="user-section">
        <div className="circular-border-box animate__animated animate__fadeInLeft" data-percent="25">
          <p>--%</p>
        </div>

        <div className="dashboard-info animate__animated animate__bounceInDown">
          <div className="dashboard-user-info">
            <h1 className="greetings">Welcome {data.user.first_name}</h1>
            <p>
              KYC Status: <span>{data.user.kyc ? "We can vouch for you! 🤝" : "We truly don't know you 🤷🏻‍♂️"}</span>
            </p>
            <p>Tier: Copper</p>
            <p>
              Invested: <span>${data.user.balance}</span>
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
}

export default Main;

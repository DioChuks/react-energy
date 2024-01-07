function Main() {
  return (
    <>
      <div className="user-section">
        <div className="circular-border-box" data-percent="25">
          <p>--%</p>
        </div>

        <div className="dashboard-info">
          <div className="dashboard-user-info">
            <h1>Welcome User</h1>
            <p>
              KYC Status: <span>We don't know you 😞</span>
            </p>
            <p>Tier: Copper</p>
            <p>
              Invested: <span>$100</span>
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

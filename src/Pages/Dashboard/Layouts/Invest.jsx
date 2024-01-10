import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../../routes/api";
import 'animate.css';

function Invest() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = location.state || {};
  const [investmentAmount, setInvestmentAmount] = useState(0);
  const [evRate, setEvRate] = useState(0.5);
  const [calculatedEv, setCalculatedEv] = useState(0);
  const handleInvestment = async () => {
    try {
      const response = await axios.post(
        `${apiUrl}/invest`,
        { amount: investmentAmount },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const handleCalculator = () => {
    const calculatedEv = investmentAmount / evRate;
    setCalculatedEv(calculatedEv);
    setInvestmentAmount(0);
  };

  return (
    <div className="invest">
      <div className="invest-box">
        <div className="invest-heading animate__animated animate__slideInRight">
          <h2 className="invest-title">Invest in the future of solar energy</h2>
          <p className="invest-subtitle">
            There's only so much to this we can offer, but with your
            investments, the future together is looking bright 🤝
          </p>
        </div>
        <div className="invest-form-container">
          <div className="invest-form-box">
            <div className="invest-form">
              <div>
                <label>Amount:</label>
                <input
                  type="number"
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(e.target.value)}
                />
              </div>
              <div>
                <label>EV Rate:</label>
                <input
                  type="number"
                  value={evRate}
                  onChange={(e) => setEvRate(e.target.value)}
                  disabled
                />
              </div>
              <button onClick={handleCalculator}>Calculate EV</button>
              <p>Calculated EV: {calculatedEv}</p>
              <button onClick={handleInvestment}>Invest Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invest;
